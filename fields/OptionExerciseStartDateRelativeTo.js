var invert = require('invert-obj');

function OptionExerciseStartDateRelativeTo (optionExerciseStartDateRelativeTo) {
  this.message = optionExerciseStartDateRelativeTo;
}

OptionExerciseStartDateRelativeTo.prototype.value = function () {
  return this.message;
};

OptionExerciseStartDateRelativeTo.Tag = '41125';

OptionExerciseStartDateRelativeTo.Type = 'INT';

module.exports = OptionExerciseStartDateRelativeTo;