var invert = require('invert-obj');

function UnderlyingOptionExerciseNominationDeadline (underlyingOptionExerciseNominationDeadline) {
  this.message = underlyingOptionExerciseNominationDeadline;
}

UnderlyingOptionExerciseNominationDeadline.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseNominationDeadline.Tag = '41835';

UnderlyingOptionExerciseNominationDeadline.Type = 'LOCALMKTDATE';

module.exports = UnderlyingOptionExerciseNominationDeadline;