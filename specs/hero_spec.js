var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');

describe('Hero', function(){
  var hero;
  var task;
  var task2;
  var task3;
  var food;
  var food2;

beforeEach(function(){
  hero = new Hero("Dongslayer", 1000, "Monopoly dice");
  task = new Task(8, 8, "8 gold");
  task2 = new Task(1, 6, "5 gold");
  task3 = new Task(5, 2, "1 gold");
  food = new Food("Monopoly card", 50);
  food2 = new Food("Monopoly dice", 100);

})


it("should have a name", function(){
  assert.strictEqual(hero.name, "Dongslayer");
});

it("Should have a health", function(){
  assert.strictEqual(hero.health, 1000);
});

it("Should have a favourite food", function(){
  assert.strictEqual(hero.favouriteFood, "Monopoly dice");
});

it("Should talk, saying their name", function(){
  assert.strictEqual(hero.talk(), "I am Dongslayer");
});

it("Should have some tasks to complete", function(){
  hero.addTask(task);
  assert.strictEqual(hero.tasks[0], task);
});

it("Should be able to complete a task", function(){
  task.complete();
  assert.strictEqual(task.done, true);
});

it("Should have named food which has a replenishment value", function(){
  assert.strictEqual(food.name, "Monopoly card");
  assert.strictEqual(food.replenishment, 50);
});

it("Should be able to eat food, increasing health by replenishment value", function(){
  hero.eat(food);
  assert.strictEqual(hero.health, 1050);
})

it("Should food eaten be hero's favourite, health increasing by 1.5* replenishment value", function(){
  hero.eat(food2);
  assert.strictEqual(hero.health, 1150);
})

it("Should sort tasks by difficult, urgency or reward", function(){
  hero.addTask(task);
  hero.addTask(task2);
  hero.addTask(task3);
  hero.sortTasks("difficultyLevel");
  assert.deepEqual(hero.tasks, [task2, task3, task]);
})






})