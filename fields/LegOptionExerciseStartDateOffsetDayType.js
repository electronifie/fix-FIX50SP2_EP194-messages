var invert = require('invert-obj');

function LegOptionExerciseStartDateOffsetDayType (legOptionExerciseStartDateOffsetDayType) {
  this.message = legOptionExerciseStartDateOffsetDayType;
}

LegOptionExerciseStartDateOffsetDayType.prototype.value = function () {
  return this.message;
};

LegOptionExerciseStartDateOffsetDayType.Tag = '41503';

LegOptionExerciseStartDateOffsetDayType.Type = 'INT';

module.exports = LegOptionExerciseStartDateOffsetDayType;