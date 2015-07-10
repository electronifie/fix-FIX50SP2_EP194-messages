var invert = require('invert-obj');

function LegAutomaticExerciseThresholdRate (legAutomaticExerciseThresholdRate) {
  this.message = legAutomaticExerciseThresholdRate;
}

LegAutomaticExerciseThresholdRate.prototype.value = function () {
  return this.message;
};

LegAutomaticExerciseThresholdRate.Tag = '41485';

LegAutomaticExerciseThresholdRate.Type = 'FLOAT';

module.exports = LegAutomaticExerciseThresholdRate;