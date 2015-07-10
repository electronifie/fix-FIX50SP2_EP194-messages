var invert = require('invert-obj');

function OptionExerciseBusinessDayConvention (optionExerciseBusinessDayConvention) {
  this.message = optionExerciseBusinessDayConvention;
}

OptionExerciseBusinessDayConvention.prototype.value = function () {
  return this.message;
};

OptionExerciseBusinessDayConvention.Tag = '41118';

OptionExerciseBusinessDayConvention.Type = 'INT';

module.exports = OptionExerciseBusinessDayConvention;