var invert = require('invert-obj');

function OptionExerciseEarliestDateUnit (optionExerciseEarliestDateUnit) {
  this.message = optionExerciseEarliestDateUnit;
}

OptionExerciseEarliestDateUnit.prototype.value = function () {
  return this.message;
};

OptionExerciseEarliestDateUnit.Tag = '41121';

OptionExerciseEarliestDateUnit.Type = 'STRING';

module.exports = OptionExerciseEarliestDateUnit;