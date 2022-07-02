const express = require("express");
const router = express.Router();

// @http function:              Fetching data from the server.
// @route                           GET api/contacts
// @desc                            Get all user's contacts
// @access                         Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @http function:              Sending data to the server.
// @route                           POST api/contacts
// @desc                            Add new contact
// @access                         Private
router.post("/", (req, res) => {
  res.send("Add new contact");
});

// @http function:              Updating data  already on the server.
// @route                           PUT api/contacts/:id
// @desc                            Update contact
// @access                         Private
router.put("/:id", (req, res) => {
  res.send("Update new contact");
});

// @http function:              Deleting data on the server.
// @route                           DELETE api/contacts
// @desc                            Delete  contact
// @access                         Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
