const jwt = require('jsonwebtoken');

const secret =
  process.env.JWT_SECRET;

module.exports = {
  generateToken: function(user) {
    const payload = {
      userId: user.id,
      username: user.username
    };

    const options = {
      expiresIn: "1d"
    };
    return jwt.sign(payload, secret, options);
  }
};
