const validateUser = async (req, res, next) => {
  const data = req.body;

  if (data.displayName.length < 8 || data.displayName.length === 8) {
      return res.status(400).json({
          message: '"displayName" length must be at least 8 characters long',
        });
  }

  // https://bit.ly/3Rv3RmW
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.test(data.email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }

  if (data.password.length < 6) {
      return res.status(400).json({
          message: '"password" length must be at least 6 characters long',
        });
  }

  next();
};

module.exports = validateUser;