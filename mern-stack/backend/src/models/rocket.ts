import mongoose from 'mongoose';


const rocketSchema = new mongoose.Schema ({
    command: {
        type: String,
        required: true
    },
    
    name: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    }
},

{
    timestamps: true,
})

const Rocket = mongoose.model('Rocket_Chat', rocketSchema);
export { Rocket };