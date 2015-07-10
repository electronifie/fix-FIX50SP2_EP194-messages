var invert = require('invert-obj');

function OptionExerciseStartDateUnadjusted (optionExerciseStartDateUnadjusted) {
  this.message = optionExerciseStartDateUnadjusted;
}

OptionExerciseStartDateUnadjusted.prototype.value = function () {
  return this.message;
};

OptionExerciseStartDateUnadjusted.Tag = '41124';

OptionExerciseStartDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = OptionExerciseStartDateUnadjusted;