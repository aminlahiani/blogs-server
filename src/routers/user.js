const express = require("express");

const User = require("../models/user");

const router = new express.Router();

router.post("/signup", async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user , token})
    } catch (e) {
        res.status(400).send(e)
    }
});

router.post('/signin', async (req, res) => {
  try {
      const user = await User.findByCredentials(req.body.email, req.body.password)
      const token = await user.generateAuthToken()
      res.send({ user, token })
  } catch (error) {
      res.status(400).send(error)
  }
})

router.get("/", function (req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!",
  });
});

module.exports = router;
