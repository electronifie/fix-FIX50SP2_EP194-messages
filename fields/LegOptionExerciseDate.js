var invert = require('invert-obj');

function LegOptionExerciseDate (legOptionExerciseDate) {
  this.message = legOptionExerciseDate;
}

LegOptionExerciseDate.prototype.value = function () {
  return this.message;
};

LegOptionExerciseDate.Tag = '41513';

LegOptionExerciseDate.Type = 'LOCALMKTDATE';

module.exports = LegOptionExerciseDate;