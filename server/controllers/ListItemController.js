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
      res.status(200).send(newItem);
    });
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
          res.status(200).send(foundItem);
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
