const express = require("express");
const petController = require("../controllers/petController.js");
const router = express.Router();

//create pet docuemnt and send data back to frontend to map data


router.post("/", petController.createPet, (req, res) => {
  // CHANGED ALL res.send to res.status
  res.status(200).json(res.locals.pets);
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