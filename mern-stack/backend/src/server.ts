import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { authRouter } from "./routes/auth"
import { serverRouter } from "./routes/routes";
import { User } from './models/user';
import { users } from "./data/index";
import cors from 'cors';


dotenv.config();

const { 
  PORT,
} = process.env;

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/DigitalDreamForge", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  autoIndex: true, 
}).then((res) => {
  console.log('MongoDB connected');


  User.insertMany(users);

}).catch((err) => {
  console.error("Connection failed", err);
});

const app = express();
//app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.urlencoded({extended: false}));
app.use(cors());

/*app.use(function(_, res, next) {
  res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});*/

app.use(serverRouter);

app.use("/auth", authRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}` ));