var invert = require('invert-obj');

function OptionExerciseDate (optionExerciseDate) {
  this.message = optionExerciseDate;
}

OptionExerciseDate.prototype.value = function () {
  return this.message;
};

OptionExerciseDate.Tag = '41138';

OptionExerciseDate.Type = 'LOCALMKTDATE';

module.exports = OptionExerciseDate;