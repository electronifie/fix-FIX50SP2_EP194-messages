var invert = require('invert-obj');

function LegFallbackExerciseIndicator (legFallbackExerciseIndicator) {
  this.message = legFallbackExerciseIndicator;
}

LegFallbackExerciseIndicator.prototype.value = function () {
  return this.message;
};

LegFallbackExerciseIndicator.Tag = '41488';

LegFallbackExerciseIndicator.Type = 'BOOLEAN';

module.exports = LegFallbackExerciseIndicator;