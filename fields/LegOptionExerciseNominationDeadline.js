var invert = require('invert-obj');

function LegOptionExerciseNominationDeadline (legOptionExerciseNominationDeadline) {
  this.message = legOptionExerciseNominationDeadline;
}

LegOptionExerciseNominationDeadline.prototype.value = function () {
  return this.message;
};

LegOptionExerciseNominationDeadline.Tag = '41506';

LegOptionExerciseNominationDeadline.Type = 'LOCALMKTDATE';

module.exports = LegOptionExerciseNominationDeadline;