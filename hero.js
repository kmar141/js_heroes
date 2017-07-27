var _ = require("lodash");


var Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.talk = function() {
  return "I am " + this.name;
};

Hero.prototype.addTask = function(task) {
  this.tasks.push(task);
};

Hero.prototype.eat = function(food) {
  if (food.name === this.favouriteFood){
    this.health += (food.replenishment * 1.5);
  } else {
  this.health += food.replenishment;
  }
};

Hero.prototype.sortTasks = function(sortValue) {
  this.tasks = _.sortBy(this.tasks, sortValue);
};

// sortBy: function(type) {
//   return _.sortBy(this.tasks, type).reverse();
// }

module.exports = Hero;