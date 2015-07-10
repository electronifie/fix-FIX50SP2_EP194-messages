var invert = require('invert-obj');

function UnderlyingAutomaticExerciseIndicator (underlyingAutomaticExerciseIndicator) {
  this.message = underlyingAutomaticExerciseIndicator;
}

UnderlyingAutomaticExerciseIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingAutomaticExerciseIndicator.Tag = '41813';

UnderlyingAutomaticExerciseIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingAutomaticExerciseIndicator;