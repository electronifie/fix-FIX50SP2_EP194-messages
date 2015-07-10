var invert = require('invert-obj');

function OptionExerciseLastDateUnadjusted (optionExerciseLastDateUnadjusted) {
  this.message = optionExerciseLastDateUnadjusted;
}

OptionExerciseLastDateUnadjusted.prototype.value = function () {
  return this.message;
};

OptionExerciseLastDateUnadjusted.Tag = '41133';

OptionExerciseLastDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = OptionExerciseLastDateUnadjusted;