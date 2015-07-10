var invert = require('invert-obj');

function OptionExerciseExpirationDateRelativeTo (optionExerciseExpirationDateRelativeTo) {
  this.message = optionExerciseExpirationDateRelativeTo;
}

OptionExerciseExpirationDateRelativeTo.prototype.value = function () {
  return this.message;
};

OptionExerciseExpirationDateRelativeTo.Tag = '41143';

OptionExerciseExpirationDateRelativeTo.Type = 'INT';

module.exports = OptionExerciseExpirationDateRelativeTo;