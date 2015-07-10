var invert = require('invert-obj');

function AutomaticExerciseThresholdRate (automaticExerciseThresholdRate) {
  this.message = automaticExerciseThresholdRate;
}

AutomaticExerciseThresholdRate.prototype.value = function () {
  return this.message;
};

AutomaticExerciseThresholdRate.Tag = '41110';

AutomaticExerciseThresholdRate.Type = 'FLOAT';

module.exports = AutomaticExerciseThresholdRate;