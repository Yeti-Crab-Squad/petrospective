const { ListItem } = require('../models/BucketListModels');

const ListItemController = {
  // creates new list items for the bucket list
  addItem(req, res, next) {
    ListItem.create({
      listItem: req.body.listItem,
      isChecked: false,
    }, (err, newItem) => {
      if (err) {
         next({
          log: 'Error creating list item. Please check middleware syntax.',
        });
      }
      res.locals.items = newItem;
         // changed to.json
      // res.status(200).send(newItem);
      res.status(200).json(newItem);
    });
  },

  getAllItems(req, res, next) {
    ListItem.find({},
      (err, allItems) => {
        if (err) {
          next({
            log: 'Error grabbing list items. Please check middleware syntax.',
          });
        } else {
          // setting the value to -1 sorts IDs descending, so posts from newest to oldest
          // allItems.sort({ _id: -1 });
          res.status(200).json(allItems);
        }
      });
  },

  getItem(req, res, next) {
    const itemTitle = req.params.item;
    console.log(itemTitle)

    ListItem.findOne({ listItem: itemTitle },
      (err, foundItem) => {
        if (err) {
          return next({
            log: 'Error getting list item. Please check middleware syntax.',
          });
        } else {
                   // changed to.json
      // res.status(200).send(newItem);
          return res.status(200).json(foundItem);
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
          res.status(200).send(updatedItem);
        }
      });
  },

  // deletes items from the bucket list
  deleteItem(req, res, next) {
    const itemTitle = req.params.item;
    ListItem.deleteMany({
     
    }, (err) => {
      if (err) {
        return next({
          log: 'Error deleting list item. Please check middleware syntax.',
        });
      } else {
        return res.sendStatus(200);
      }
    });
  },
};

module.exports = ListItemController;
