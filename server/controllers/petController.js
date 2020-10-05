const Pet = require("../models/petModel.js");
const PetController = {};
const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcrypt");

PetController.createPet = (req, res, next) => {
  const { username, password, profilePicture, age, bio, name } = req.body;
  // bcrypt.hash(password, SALT_WORK_FACTOR, (err, hash) => {
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
  // });
};

PetController.validateUser = (req, res, next) => {
  const { username, password } = req.body;
  Pet.find({ username, password }, (err, user) => {
    if (err) {
      // res.send("please enter a valid username and password.");
      return next({
        log:
          "Error occured in PetController.validateUser middleware. Please check your syntax.",
        message: { err: err },
      });
    }

    // bcrypt.compare(password, user.password, (err, result) => {
    //   console.log(`This is in brcypt`)
    //   if(err) {
    //     next({
    //       log:
    //         "Error occured in PetController.validateUser bcrypt middleware. Please check your syntax.",
    //       message: { err: err },
    //     })
    //   }


    //   if (result) {
    //     console.log("success!");
    //     //change this redirect name based on the frontend
    //     // res.status(200).redirect("/home");
    //   } else {
    //     console.log(`This is in brcypt else conditional`)
    //     console.log(err)
    //     // next();
    //     //change this redirect name based on the frontend
    //     // res.send("Incorrect password. Please try again.");
    //     // res.status(200).redirect("/");
    //   }
    // });
    res.locals.pets = user;
  });
  
  return next();
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
