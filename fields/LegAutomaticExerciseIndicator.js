var invert = require('invert-obj');

function LegAutomaticExerciseIndicator (legAutomaticExerciseIndicator) {
  this.message = legAutomaticExerciseIndicator;
}

LegAutomaticExerciseIndicator.prototype.value = function () {
  return this.message;
};

LegAutomaticExerciseIndicator.Tag = '41484';

LegAutomaticExerciseIndicator.Type = 'BOOLEAN';

module.exports = LegAutomaticExerciseIndicator;