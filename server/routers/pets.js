const express = require("express");
const petController = require("../controllers/petController.js");
const router = express.Router();

//create pet docuemnt and send data back to frontend to map data
router.post("/signup",petController.createPet, (req, res) => {
  res.status(200).json(res.locals.pets);
});

router.post("/login", petController.validateUser, (req, res) => {
  console.log("This is in the /login ",res.locals.user)
  res.status(200).json(res.locals.user);
});

router.put("/:username", petController.updatePetBio, (req, res) => {
  // CHANGED ALL res.send to res.status
  res.status(200).json(res.locals.updatedBio);
});

router.delete("/:username", petController.deletePet, (req, res) => {
  // CHANGED ALL res.send to res.status
  res.status(200);
});

// exported the router
module.exports = router;


