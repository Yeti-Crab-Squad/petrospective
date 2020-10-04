const Pet = require("../models/petModel.js");
const PetController = {};

PetController.createPet = (req, res, next) => {
  const { username, password, profilePicture, age, bio, name } = req.body;
  Pet.create(
    { username, password, profilePicture, age, bio, name },
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
};

PetController.updatePetBio = (req, res, next) => {
  // Changed this to access the username, not bio, because was set to username in the initial route
  // const { bio } = req.params;
  const { username } = req.params
  const { updatedBio } = req.body;
  Pet.findOneAndUpdate(
    // changed to username
    // { name: bio },
    { name: username},
    // changed name to bio
    // { name: updatedBio },
    { bio: updatedBio },
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
