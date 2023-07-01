import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `connected to mongo database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (err) {
    console.log(`error in mongodb ${err}`.bgRed.white);
  }
};
export default connectDB;
