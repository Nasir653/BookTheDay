const { default: mongoose } = require("mongoose");

const registerModel = mongoose.Schema({
  Username: String,
  Email: String,
  Password: String,
});

export const Users =
  mongoose.models.Register || mongoose.model("Register", registerModel);
