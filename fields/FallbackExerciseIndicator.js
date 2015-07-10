var invert = require('invert-obj');

function FallbackExerciseIndicator (fallbackExerciseIndicator) {
  this.message = fallbackExerciseIndicator;
}

FallbackExerciseIndicator.prototype.value = function () {
  return this.message;
};

FallbackExerciseIndicator.Tag = '41113';

FallbackExerciseIndicator.Type = 'BOOLEAN';

module.exports = FallbackExerciseIndicator;