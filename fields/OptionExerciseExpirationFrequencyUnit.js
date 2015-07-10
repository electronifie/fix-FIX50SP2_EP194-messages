var invert = require('invert-obj');

function OptionExerciseExpirationFrequencyUnit (optionExerciseExpirationFrequencyUnit) {
  this.message = optionExerciseExpirationFrequencyUnit;
}

OptionExerciseExpirationFrequencyUnit.prototype.value = function () {
  return this.message;
};

OptionExerciseExpirationFrequencyUnit.Tag = '41147';

OptionExerciseExpirationFrequencyUnit.Type = 'STRING';

module.exports = OptionExerciseExpirationFrequencyUnit;