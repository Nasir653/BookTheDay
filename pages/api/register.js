import { ConnectDb } from "Config/ConnectDb";
import { Users } from "Models/RegisterModel";
import messagehandler from "Utils/MessageHandler";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const { Username, Email, Password } = req.body;

    if (Username === "" || Email === "" || Password === "") {
      return messagehandler(res, 404, "All Crendentials Required");
    }

    ConnectDb();

    const existingUser = await Users.findOne({ Email });

    if (existingUser) {
      return messagehandler(res, 401, "Email Already Exist");
    }
    let hashPass = await bcrypt.hash(Password, 10);

    let User = await Users.create({
      Username: Username,
      Email: Email,
      Password: hashPass,
    });

    if (!User) {
      return messagehandler(res, 404, "Something Went Wrong ");
    }

    return messagehandler(res, 200, "Registration Successfull", User);
  } catch (error) {
    console.log(error);
    return messagehandler(res, 500, "Server Error");
  }
};
export default register;
