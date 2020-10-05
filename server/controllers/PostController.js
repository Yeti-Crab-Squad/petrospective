const { Post } = require('../models/BucketListModels');

const PostController = {
  // creates new posts for your feed

  addPost(req, res, next) {

     Post.create({
      listItem: req.body.listItem,
      dateCompleted: req.body.dateCompleted,
      postDescription: req.body.postDescription,
      location: req.body.location,
      // is the above a Google Maps URL or a string that tells Maps to make a map?
      youtubeLink: req.body.youtubeLink,
      images: req.body.images
      // imageUpload: Come back to this. Use GridFS to store images

    }, (err, newPost) => {
      if (err) {
        next({
          log: 'Error creating post. Please check middleware syntax.',
        });
      } else {
        // changed to.json
        // res.status(200).send(newPost);
        res.status(200).json(newPost);
      }
    });
  },
  
  getAllPosts(req, res, next) {
    Post.find({}).sort({ _id: -1 }).exec(
      (err, allPosts) => {
        if (err) {
          next({
            log: 'Error grabbing post feed. Please check middleware syntax.',
          });
        } else {
          res.status(200).json(allPosts);
        }
      },
    );
  },

  // displays posts in database
  getPost(req, res, next) {
    const postTitle = req.params.title;
    Post.findOne({ listItem: postTitle },
      (err, foundPost) => {
        if (err) {
          next({
            log: 'Error getting post. Please check middleware syntax.',
          });
        } else {
             // changed to.json
        // res.status(200).send(newPost);
          res.status(200).json(foundPost);
        }
      });
  },

  // allows you to edit and update posts for your feed
  updatePost(req, res, next) {
    const postTitle = req.params.title;
    const update = {
      listItem: req.body.listItem,
      datePosted: req.body.datePosted,
      dateCompleted: req.body.dateCompleted,
      postDescription: req.body.postDescription,
      location: req.body.location,
      youtubeLink: req.body.youtubeLink,
      // imageUpload: req.body.imageUpload,
    };
    Post.findOneAndUpdate({ listItem: postTitle }, update,
      (err, updatedPost) => {
        if (err) {
          next({
            log: 'Error updating post. Please check middleware syntax.',
          });
        } else {
             // changed to.json
        // res.status(200).send(newPost);
          res.status(200).json(updatedPost);
        }
      });
  },

  // deletes posts from your feed
  deletePost(req, res, next) {
    const postTitle = req.params.title;
    Post.deleteOne({ listItem: postTitle },
      (err) => {
        if (err) {
          next({
            log: 'Error deleting post. Please check middleware syntax.',
          });
        } else {
          res.sendStatus(200);
        }
      });
  },
};

module.exports = PostController;
