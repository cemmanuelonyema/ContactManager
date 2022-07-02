const express = require("express");
const router = express.Router();

// @http function:              Fetching data from the server.
// @route                           GET api/auth
// @desc                            Get logged in user
// @access                         Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @http function:              Sending data to the server.
// @route                           POST api/auth
// @desc                            Auth user & get token
// @access                         Public
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
