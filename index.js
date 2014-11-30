var _ = require("underscore");

var howtonode = {
  hello: function (name){
      return "Hola " + name;
  },
  hola: function (name){
      return "Hello " + name;
  }
};

module.exports = howtonode;

// we need to tell node what to return when required
// var salute = require('salute'); devuelve el objeto salute
