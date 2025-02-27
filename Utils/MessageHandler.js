const messagehandler = (res, statusCode, message, payload, userId) => {
  return res
    .status(statusCode)
    .json({ message: message, payload: payload, userId: userId });
};

export default messagehandler;
