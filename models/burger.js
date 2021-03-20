const orm = require('../config/orm')

const burger = {
  selectAll: (cb) => {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },
  insertOne: (object, cb) => {
    orm.insertOne("burgers", object, (res) => {
      cb(res);
    });
  },
  updateOne: (objColVals, condition, cb) => {
    orm.update("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  }
};

module.exports = burger;