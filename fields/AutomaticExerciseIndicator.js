var invert = require('invert-obj');

function AutomaticExerciseIndicator (automaticExerciseIndicator) {
  this.message = automaticExerciseIndicator;
}

AutomaticExerciseIndicator.prototype.value = function () {
  return this.message;
};

AutomaticExerciseIndicator.Tag = '41109';

AutomaticExerciseIndicator.Type = 'BOOLEAN';

module.exports = AutomaticExerciseIndicator;