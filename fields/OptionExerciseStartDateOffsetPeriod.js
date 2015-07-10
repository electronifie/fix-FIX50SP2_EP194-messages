var invert = require('invert-obj');

function OptionExerciseStartDateOffsetPeriod (optionExerciseStartDateOffsetPeriod) {
  this.message = optionExerciseStartDateOffsetPeriod;
}

OptionExerciseStartDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

OptionExerciseStartDateOffsetPeriod.Tag = '41126';

OptionExerciseStartDateOffsetPeriod.Type = 'INT';

module.exports = OptionExerciseStartDateOffsetPeriod;