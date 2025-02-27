import mongoose from "mongoose";

export const ConnectDb = async (req, res) => {
  try {
    const url = "mongodb://localhost:27017/BookTheDay";
    mongoose.connect(url);

    console.log("DataBase Connected");
  } catch (error) {
    console.log("DataBase Not Connecting");
    return res({ message: "Server Error" });
  }
};
