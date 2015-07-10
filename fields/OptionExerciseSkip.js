var invert = require('invert-obj');

function OptionExerciseSkip (optionExerciseSkip) {
  this.message = optionExerciseSkip;
}

OptionExerciseSkip.prototype.value = function () {
  return this.message;
};

OptionExerciseSkip.Tag = '41130';

OptionExerciseSkip.Type = 'INT';

module.exports = OptionExerciseSkip;