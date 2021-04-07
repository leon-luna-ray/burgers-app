// Connection
const connection = require('./connection');
  
  // Object for all our SQL statement functions.
  const orm = {
    selectAll: (tableInput, cb) => {
      const queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: (table, object, cb) => {
      
      connection.query(
        'INSERT INTO burgers SET ?', object, 
        (err, res) => {
          if (err) throw err;
          cb(res)
        }
      );
    },

    updateOne: function(table, object, condition, cb) {
      
      const queryString = `UPDATE burgers SET devoured = ${object.devoured} WHERE id = '${condition}'`

      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };
  
  module.exports = orm;  