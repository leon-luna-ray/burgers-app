const orm = require('../config/orm');

// burger model with methods to select all, insert one and update one
const burger = {
  selectAll: (cb) => {
    orm.selectAll('burgers', (res) => {
      cb(res);
    });
  },
  insertOne: (object, cb) => {
    orm.insertOne('burgers', object, (res) => {
      cb(res);
    });
  },
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne('burgers', objColVals, condition, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
