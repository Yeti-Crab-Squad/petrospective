const express = require("express");
const petController = require("../controllers/petController.js");
const router = express.Router();

//create pet docuemnt and send data back to frontend to map data
router.post("/signup", petController.createPet, (req, res) => {
  res.send(200).json(res.locals.pets);
});

router.get("/login", petController.validateUser);

router.put("/:username", petController.updatePetBio, (req, res) => {
  res.send(200).json(res.locals.updatedBio);
});

router.delete("/:username", petController.deletePet, (req, res) => {
  res.send(200);
});
