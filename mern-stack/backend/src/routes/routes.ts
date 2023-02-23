import express, { Request, Response } from 'express';
import { Rocket } from "../models/rocket"
const router = express.Router();

router.get('/api/database', [], async (req: Request, res: Response ) => {
    const chats = await Rocket.find({});
    res.status(200).json(chats);
});
// @description     Create Rocket.Bot Info
// @routes          POST /api/database
// @access          Private
router.post('/api/database', async (req: Request, res: Response ) => {
    if (!req.body.command || !req.body.name || !req.body.time) {
        res.status(400);
        throw new Error('Please add a command, name, and date');
    }
    const newChat = await Rocket.create({
        command: req.body.command,
        name: req.body.name,
        time: req.body.time,
    });
    res.status(200).json(newChat);
});

// @description     Update Rocket.Bot Info
// @routes          PUT /api/database/:id
// @access          Private
router.put('/api/database/:id', async (req: Request, res: Response ) => {
    const chats = await Rocket.findById(req.params.id);
    if (!chats) {
        res.status(400);
        throw new Error('ID not found');
    }
    const updatedChat = await Rocket.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedChat);
});
// @description     Delete Rocket.Bot Info
// @routes          DELETE /api/database/:id
// @access          Private
router.delete('/api/database/:id', async (req: Request, res: Response ) => {
    const chats = await Rocket.findById(req.params.id);
    if (!chats) {
        res.status(400);
        throw new Error('ID not found');
    }
    await chats.remove();
    res.status(200).json({ id: req.params.id });
});


export { router as serverRouter };