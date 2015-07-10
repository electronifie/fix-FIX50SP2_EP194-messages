var invert = require('invert-obj');

function OptionExerciseBusinessCenter (optionExerciseBusinessCenter) {
  this.message = optionExerciseBusinessCenter;
}

OptionExerciseBusinessCenter.prototype.value = function () {
  return this.message;
};

OptionExerciseBusinessCenter.Tag = '41117';

OptionExerciseBusinessCenter.Type = 'STRING';

module.exports = OptionExerciseBusinessCenter;