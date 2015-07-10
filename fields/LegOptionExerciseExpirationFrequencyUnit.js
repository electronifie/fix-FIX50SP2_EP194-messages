var invert = require('invert-obj');

function LegOptionExerciseExpirationFrequencyUnit (legOptionExerciseExpirationFrequencyUnit) {
  this.message = legOptionExerciseExpirationFrequencyUnit;
}

LegOptionExerciseExpirationFrequencyUnit.prototype.value = function () {
  return this.message;
};

LegOptionExerciseExpirationFrequencyUnit.Tag = '41522';

LegOptionExerciseExpirationFrequencyUnit.Type = 'STRING';

module.exports = LegOptionExerciseExpirationFrequencyUnit;