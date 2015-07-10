var invert = require('invert-obj');

function OptionExerciseFirstDateUnadjusted (optionExerciseFirstDateUnadjusted) {
  this.message = optionExerciseFirstDateUnadjusted;
}

OptionExerciseFirstDateUnadjusted.prototype.value = function () {
  return this.message;
};

OptionExerciseFirstDateUnadjusted.Tag = '41132';

OptionExerciseFirstDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = OptionExerciseFirstDateUnadjusted;