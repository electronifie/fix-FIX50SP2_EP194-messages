var invert = require('invert-obj');

function OptionExerciseStartDateOffsetUnit (optionExerciseStartDateOffsetUnit) {
  this.message = optionExerciseStartDateOffsetUnit;
}

OptionExerciseStartDateOffsetUnit.prototype.value = function () {
  return this.message;
};

OptionExerciseStartDateOffsetUnit.Tag = '41127';

OptionExerciseStartDateOffsetUnit.Type = 'STRING';

module.exports = OptionExerciseStartDateOffsetUnit;