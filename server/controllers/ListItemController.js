const { ListItem } = require('../models/BucketListModels');

const ListItemController = {
  // creates new list items for the bucket list
  addItem(req, res, next) {
    ListItem.create({
      listItem: req.body.listItem,
      isChecked: false,
      hasPost: false,
    }, (err, newItem) => {
      if (err) {
        next({
          log: 'Error creating list item. Please check middleware syntax.',
        });
      }
      res.locals.items = newItem;
      res.status(200).json(newItem);
    });
  },

  getAllItems(req, res, next) {
    ListItem.find({}).sort({ _id: -1 }).exec(
      (err, allItems) => {
        if (err) {
          next({
            log: 'Error grabbing list items. Please check middleware syntax.',
          });
        } else {

          res.status(200).json(allItems);

        }
      },
    );
  },

  getItem(req, res, next) {
    const itemTitle = req.params.item;
    ListItem.findOne({ listItem: itemTitle },
      (err, foundItem) => {
        if (err) {
          next({
            log: 'Error getting list item. Please check middleware syntax.',
          });
        } else {
          res.status(200).json(foundItem);
        }
     });
  },

  updateItem(req, res, next) {
    const itemTitle = req.params.item;
    const update = {
      listItem: req.body.listItem,
      isChecked: req.body.isChecked,
      hasPost: req.body.hasPost,
    };
    ListItem.findOneAndUpdate({ listItem: itemTitle }, update,
      (err, updatedItem) => {
        if (err) {
          next({
            log: 'Error updating list item. Please check middleware syntax.',
          });
        } else {
          res.status(200).json(updatedItem);
        }
      });
  },

  // deletes items from the bucket list
  deleteItem(req, res, next) {
    const itemTitle = req.params.item;
    ListItem.deleteOne({
      listItem: itemTitle,
    }, (err) => {
      if (err) {
        next({
          log: 'Error deleting list item. Please check middleware syntax.',
        });
      } else {
        res.sendStatus(200);
      }
    });
  },
};

module.exports = ListItemController;
