const Pet = require("../models/petModel.js");
const PetController = {};
const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcryptjs");

PetController.createPet = (req, res, next) => {
  const { username, password, profilePicture, age, bio, name } = req.body;
  bcrypt.hash(password, SALT_WORK_FACTOR, (err, hash) => {
    Pet.create(
      { username, hash, profilePicture, age, bio, name },
      (err, pet) => {
        if (err) {
          return next({
            log:
              "Error occured in PetController.createPet middleware. Please check your syntax.",
            message: { err: err },
          });
        }
        res.locals.pets = pet;
        return next();
      }
    );
  });
};

PetController.validateUser = (req, res, next) => {
  const { username, password } = req.params;
  Pet.find({ username, password }, (err, user) => {
    if (err) {
      res.send("please enter a valid username and password.");
      return next({
        log:
          "Error occured in PetController.validateUser middleware. Please check your syntax.",
        message: { err: err },
      });
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        console.log("success!");
        //change this redirect name based on the frontend
        res.send(200).redirect("/home");
      } else {
        res.send("Incorrect password. Please try again.");
        res.send(200).redirect("/");
      }
    });
  });
  return next();
};

PetController.updatePetBio = (req, res, next) => {
  const { bio } = req.params;
  const { updatedBio } = req.body;
  Pet.findOneAndUpdate(
    { name: bio },
    { name: updatedBio },
    { new: true },
    (err, pet) => {
      if (err) {
        return next({
          log:
            "Error occured in PetController.updatePetName middleware. Please check your syntax.",
          message: { err: err },
        });
      }
      res.locals.updatedBio = pet;
      return next();
    }
  );
};

PetController.deletePet = (req, res, next) => {
  const { username } = req.params;
  Pet.deleteOne({ username: username }, (err, pet) => {
    if (err) {
      return next({
        log:
          "Error occured in PetController.deletePet middleware. Please check your syntax.",
        message: { err: err },
      });
    }
    return next();
  });
};

module.exports = PetController;
