var invert = require('invert-obj');

function OptionExerciseStartDateAdjusted (optionExerciseStartDateAdjusted) {
  this.message = optionExerciseStartDateAdjusted;
}

OptionExerciseStartDateAdjusted.prototype.value = function () {
  return this.message;
};

OptionExerciseStartDateAdjusted.Tag = '41129';

OptionExerciseStartDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = OptionExerciseStartDateAdjusted;