var invert = require('invert-obj');

function LegProvisionOptionExerciseStartDateOffsetDayType (legProvisionOptionExerciseStartDateOffsetDayType) {
  this.message = legProvisionOptionExerciseStartDateOffsetDayType;
}

LegProvisionOptionExerciseStartDateOffsetDayType.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseStartDateOffsetDayType.Tag = '40486';

LegProvisionOptionExerciseStartDateOffsetDayType.Type = 'INT';

module.exports = LegProvisionOptionExerciseStartDateOffsetDayType;