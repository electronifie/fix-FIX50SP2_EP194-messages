var invert = require('invert-obj');

function OptionExerciseFrequencyUnit (optionExerciseFrequencyUnit) {
  this.message = optionExerciseFrequencyUnit;
}

OptionExerciseFrequencyUnit.prototype.value = function () {
  return this.message;
};

OptionExerciseFrequencyUnit.Tag = '41123';

OptionExerciseFrequencyUnit.Type = 'STRING';

module.exports = OptionExerciseFrequencyUnit;