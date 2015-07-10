var invert = require('invert-obj');

function OptionExerciseExpirationDate (optionExerciseExpirationDate) {
  this.message = optionExerciseExpirationDate;
}

OptionExerciseExpirationDate.prototype.value = function () {
  return this.message;
};

OptionExerciseExpirationDate.Tag = '41153';

OptionExerciseExpirationDate.Type = 'LOCALMKTDATE';

module.exports = OptionExerciseExpirationDate;