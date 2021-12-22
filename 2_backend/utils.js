let jwt = require("jsonwebtoken");

const generateToken = (user) => {
  if (!user) return null;

  let u = {
    userId: user.userId,
    name: user.name,
    username: user.username,
    isAdmin: user.isAdmin,
  };

  return jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24,
  });
};

const getCleanUser = () => {
  if (!user) return null;

  return {
    userId: user.userId,
    name: user.name,
    username: user.username,
    isAdmin: user.isAdmin,
  };
};

module.exports = {
  generateToken,
  getCleanUser,
};
