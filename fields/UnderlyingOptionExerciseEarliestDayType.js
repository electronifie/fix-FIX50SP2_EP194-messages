var invert = require('invert-obj');

function UnderlyingOptionExerciseEarliestDayType (underlyingOptionExerciseEarliestDayType) {
  this.message = underlyingOptionExerciseEarliestDayType;
}

UnderlyingOptionExerciseEarliestDayType.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseEarliestDayType.Tag = '41823';

UnderlyingOptionExerciseEarliestDayType.Type = 'INT';

module.exports = UnderlyingOptionExerciseEarliestDayType;