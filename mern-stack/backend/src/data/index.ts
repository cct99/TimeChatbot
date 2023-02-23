import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const users = [
    {
      _id: userIds[0],
      firstName: "Adam",
      lastName: "Tester",
      email: "adam@ddfmail.com",
      password: "stagingPassword01!",
      occupation: "Admin",
      createdAt: 1115211422,
      updatedAt: 1115211422,
      __v: 0,
    },
    {
      _id: userIds[1],
      firstName: "John",
      lastName: "Tester",
      email: "john@ddfmail.com",
      password: "stagingPassword01!",
      occupation: "Management",
      createdAt: 1595589072,
      updatedAt: 1595589072,
      __v: 0,
    },
    {
      _id: userIds[2],
      firstName: "Rebecca",
      lastName: "Tester",
      email: "rebecca@ddfmail.com",
      password: "stagingPassword01!",
      occupation: "Employee",
      createdAt: 1288090662,
      updatedAt: 1288090662,
      __v: 0,
    },
    {
      _id: userIds[3],
      firstName: "Sarah",
      lastName: "Tester",
      email: "sarah@ddfmail.com",
      password: "stagingPassword01!",
      occupation: "Employee",
      createdAt: 1219214568,
      updatedAt: 1219214568,
      __v: 0,
    },
];

export { users };