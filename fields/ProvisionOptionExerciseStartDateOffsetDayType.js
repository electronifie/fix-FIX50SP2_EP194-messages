var invert = require('invert-obj');

function ProvisionOptionExerciseStartDateOffsetDayType (provisionOptionExerciseStartDateOffsetDayType) {
  this.message = provisionOptionExerciseStartDateOffsetDayType;
}

ProvisionOptionExerciseStartDateOffsetDayType.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseStartDateOffsetDayType.Tag = '40133';

ProvisionOptionExerciseStartDateOffsetDayType.Type = 'INT';

module.exports = ProvisionOptionExerciseStartDateOffsetDayType;