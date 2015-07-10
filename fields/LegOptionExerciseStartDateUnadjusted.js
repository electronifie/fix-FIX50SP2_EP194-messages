var invert = require('invert-obj');

function LegOptionExerciseStartDateUnadjusted (legOptionExerciseStartDateUnadjusted) {
  this.message = legOptionExerciseStartDateUnadjusted;
}

LegOptionExerciseStartDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegOptionExerciseStartDateUnadjusted.Tag = '41499';

LegOptionExerciseStartDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegOptionExerciseStartDateUnadjusted;