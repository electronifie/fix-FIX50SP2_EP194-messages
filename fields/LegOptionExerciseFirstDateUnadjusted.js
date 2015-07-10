var invert = require('invert-obj');

function LegOptionExerciseFirstDateUnadjusted (legOptionExerciseFirstDateUnadjusted) {
  this.message = legOptionExerciseFirstDateUnadjusted;
}

LegOptionExerciseFirstDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegOptionExerciseFirstDateUnadjusted.Tag = '41507';

LegOptionExerciseFirstDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegOptionExerciseFirstDateUnadjusted;