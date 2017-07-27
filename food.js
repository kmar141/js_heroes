var _ = require("lodash");


var Food = function(name, replenishment){
  this.name = name;
  this.replenishment = replenishment;
};

Food.prototype.talk = function() {
  return "You've won $10 in a beauty contest";
};



module.exports = Food;