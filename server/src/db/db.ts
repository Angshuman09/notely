import mongoose from 'mongoose'

export const db = async ()=>{
  try {
    await mongoose.connect(process.env.MONGO_URL as string)
    console.log("mongodb connected succesfully");
  } catch (error) {
    console.log("Error in connecting mongoDB");
    process.exit(1);
  }
}