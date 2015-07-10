var invert = require('invert-obj');

function OptionExerciseStartDateOffsetDayType (optionExerciseStartDateOffsetDayType) {
  this.message = optionExerciseStartDateOffsetDayType;
}

OptionExerciseStartDateOffsetDayType.prototype.value = function () {
  return this.message;
};

OptionExerciseStartDateOffsetDayType.Tag = '41128';

OptionExerciseStartDateOffsetDayType.Type = 'INT';

module.exports = OptionExerciseStartDateOffsetDayType;