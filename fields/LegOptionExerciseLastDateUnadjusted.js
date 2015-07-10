var invert = require('invert-obj');

function LegOptionExerciseLastDateUnadjusted (legOptionExerciseLastDateUnadjusted) {
  this.message = legOptionExerciseLastDateUnadjusted;
}

LegOptionExerciseLastDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegOptionExerciseLastDateUnadjusted.Tag = '41508';

LegOptionExerciseLastDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegOptionExerciseLastDateUnadjusted;