var invert = require('invert-obj');

function UnderlyingOptionExerciseStartDateOffsetDayType (underlyingOptionExerciseStartDateOffsetDayType) {
  this.message = underlyingOptionExerciseStartDateOffsetDayType;
}

UnderlyingOptionExerciseStartDateOffsetDayType.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseStartDateOffsetDayType.Tag = '41832';

UnderlyingOptionExerciseStartDateOffsetDayType.Type = 'INT';

module.exports = UnderlyingOptionExerciseStartDateOffsetDayType;