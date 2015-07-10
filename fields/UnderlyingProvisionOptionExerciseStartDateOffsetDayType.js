var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseStartDateOffsetDayType (underlyingProvisionOptionExerciseStartDateOffsetDayType) {
  this.message = underlyingProvisionOptionExerciseStartDateOffsetDayType;
}

UnderlyingProvisionOptionExerciseStartDateOffsetDayType.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseStartDateOffsetDayType.Tag = '42124';

UnderlyingProvisionOptionExerciseStartDateOffsetDayType.Type = 'INT';

module.exports = UnderlyingProvisionOptionExerciseStartDateOffsetDayType;