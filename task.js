var _ = require("lodash");


var Task = function(difficultyLevel, urgencyLevel, reward){
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.done = false;
}

Task.prototype.complete = function() {
  this.done = true;
};



module.exports = Task;