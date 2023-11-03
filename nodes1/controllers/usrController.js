const User = require("../models/userModel");

const UserCtrl = {
  createUser(req, res) {
    const data = req.body;
    new User(data)
      .save()
      .then((result) => {
        res.status(201).send({ data: result, message: "User created" });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send({ error: error, message: "Can not create user" });
      });
  },
};

module.exports = UserCtrl;
