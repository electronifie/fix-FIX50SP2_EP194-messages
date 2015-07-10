var invert = require('invert-obj');

function UnderlyingOptionExerciseExpirationFrequencyUnit (underlyingOptionExerciseExpirationFrequencyUnit) {
  this.message = underlyingOptionExerciseExpirationFrequencyUnit;
}

UnderlyingOptionExerciseExpirationFrequencyUnit.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseExpirationFrequencyUnit.Tag = '41851';

UnderlyingOptionExerciseExpirationFrequencyUnit.Type = 'STRING';

module.exports = UnderlyingOptionExerciseExpirationFrequencyUnit;