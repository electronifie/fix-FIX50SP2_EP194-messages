var invert = require('invert-obj');

function UnderlyingFallbackExerciseIndicator (underlyingFallbackExerciseIndicator) {
  this.message = underlyingFallbackExerciseIndicator;
}

UnderlyingFallbackExerciseIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingFallbackExerciseIndicator.Tag = '41817';

UnderlyingFallbackExerciseIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingFallbackExerciseIndicator;