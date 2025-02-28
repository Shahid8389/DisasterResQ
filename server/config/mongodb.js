import mongoose from "mongoose";

const connectDB = async () => {
  try {

    mongoose.connection.on('connected', () => {
      console.log("Connected to the mongoDB.");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/DisasterResQ`);

  } catch (error) {
    console.error(`Can't connect to MongoDb database!`);
  }
}

export default connectDB;