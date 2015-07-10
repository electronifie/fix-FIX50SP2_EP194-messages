var invert = require('invert-obj');

function UnderlyingAutomaticExerciseThresholdRate (underlyingAutomaticExerciseThresholdRate) {
  this.message = underlyingAutomaticExerciseThresholdRate;
}

UnderlyingAutomaticExerciseThresholdRate.prototype.value = function () {
  return this.message;
};

UnderlyingAutomaticExerciseThresholdRate.Tag = '41814';

UnderlyingAutomaticExerciseThresholdRate.Type = 'FLOAT';

module.exports = UnderlyingAutomaticExerciseThresholdRate;