const { Post } = require('../models/BucketListModels');

const PostController = {
  // creates new posts for your feed
  addPost(req, res) {
    Post.create({
      listItem: req.body.listItem,
      date: req.body.date,
      postDescription: req.body.postDescription,
      location: req.body.location,
      // is the above a Google Maps URL or a string that tells Maps to make a map?
      youtubeLink: req.body.youtubeLink,
      // imageUpload: Come back to this. Use GridFS to store images
    }, (err, newPost) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(200).send(newPost);
      }
    });
  },

  // displays posts in database
  getPost(req, res) {
    const postTitle = req.params.title;
    Post.findOne({ listItem: postTitle },
      (err, foundPost) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.status(200).send(foundPost);
        }
      });
  },

  // allows you to edit and update posts for your feed
  updatePost(req, res) {
    const postTitle = req.params.title;
    Post.findOne({ listItem: postTitle },
      (err, updatedPost) => {
        if (err) {
          res.sendStatus(400);
        } else {
          updatedPost.listItem = req.body.listItem;
          updatedPost.date = req.body.date;
          updatedPost.postDescription = req.body.postDescription;
          updatedPost.location = req.body.location;
          updatedPost.youtubeLink = req.body.youtubeLink;
          // updatedPost.imageUpload = req.body.imageUpload;
          res.status(200).send(updatedPost);
        }
      });
  },

  // deletes posts from your feed
  deletePost(req, res) {
    const postTitle = req.params.title;
    Post.deleteOne({ listItem: postTitle },
      (err) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.sendStatus(200);
        }
      });
  },
};

module.exports = PostController;
