const { ListItem } = require('../models/BucketListModels');

const ListItemController = {
  // creates new list items for the bucket list
  addItem(req, res) {
    ListItem.create({
      listItem: req.body.listItem,
      isChecked: false,
    }, (err, newItem) => {
      if (err) {
        res.sendStatus(400);
      }
      res.locals.items = newItem;
      res.status(200).send(newItem);
    });
  },

  getItem(req, res) {
    const itemTitle = req.params.item;
    ListItem.findOne({ listItem: itemTitle },
      (err, foundItem) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.status(200).send(foundItem);
        }
      });
  },

  // deletes items from the bucket list
  deleteItem(req, res) {
    const itemTitle = req.params.item;
    ListItem.deleteOne({
      listItem: itemTitle,
    }, (err) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.sendStatus(200);
      }
    });
  },
};

module.exports = ListItemController;
