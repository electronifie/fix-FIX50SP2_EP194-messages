var invert = require('invert-obj');

function LegOptionExerciseFrequencyUnit (legOptionExerciseFrequencyUnit) {
  this.message = legOptionExerciseFrequencyUnit;
}

LegOptionExerciseFrequencyUnit.prototype.value = function () {
  return this.message;
};

LegOptionExerciseFrequencyUnit.Tag = '41498';

LegOptionExerciseFrequencyUnit.Type = 'STRING';

module.exports = LegOptionExerciseFrequencyUnit;