const User = require("../../../models/user");

module.exports = async (req, res, next) => {
  const user = new User({
    ...req.user,
    ...req.body,
  });

  try {
    await user.save();
    return res.status(200).send(user.toJSON());
  } catch (err) {
    next(err);
  }
};
