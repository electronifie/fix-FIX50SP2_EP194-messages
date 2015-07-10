var invert = require('invert-obj');

function LegOptionExerciseStartDateAdjusted (legOptionExerciseStartDateAdjusted) {
  this.message = legOptionExerciseStartDateAdjusted;
}

LegOptionExerciseStartDateAdjusted.prototype.value = function () {
  return this.message;
};

LegOptionExerciseStartDateAdjusted.Tag = '41504';

LegOptionExerciseStartDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegOptionExerciseStartDateAdjusted;