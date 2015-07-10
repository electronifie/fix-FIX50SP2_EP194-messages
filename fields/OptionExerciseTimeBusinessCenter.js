var invert = require('invert-obj');

function OptionExerciseTimeBusinessCenter (optionExerciseTimeBusinessCenter) {
  this.message = optionExerciseTimeBusinessCenter;
}

OptionExerciseTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

OptionExerciseTimeBusinessCenter.Tag = '41136';

OptionExerciseTimeBusinessCenter.Type = 'STRING';

module.exports = OptionExerciseTimeBusinessCenter;