var invert = require('invert-obj');

function OptionExerciseNominationDeadline (optionExerciseNominationDeadline) {
  this.message = optionExerciseNominationDeadline;
}

OptionExerciseNominationDeadline.prototype.value = function () {
  return this.message;
};

OptionExerciseNominationDeadline.Tag = '41131';

OptionExerciseNominationDeadline.Type = 'LOCALMKTDATE';

module.exports = OptionExerciseNominationDeadline;