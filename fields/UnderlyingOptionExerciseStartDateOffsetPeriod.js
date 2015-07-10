var invert = require('invert-obj');

function UnderlyingOptionExerciseStartDateOffsetPeriod (underlyingOptionExerciseStartDateOffsetPeriod) {
  this.message = underlyingOptionExerciseStartDateOffsetPeriod;
}

UnderlyingOptionExerciseStartDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseStartDateOffsetPeriod.Tag = '41830';

UnderlyingOptionExerciseStartDateOffsetPeriod.Type = 'INT';

module.exports = UnderlyingOptionExerciseStartDateOffsetPeriod;