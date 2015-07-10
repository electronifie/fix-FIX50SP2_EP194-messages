var invert = require('invert-obj');

function ProvisionOptionExerciseStartDateOffsetPeriod (provisionOptionExerciseStartDateOffsetPeriod) {
  this.message = provisionOptionExerciseStartDateOffsetPeriod;
}

ProvisionOptionExerciseStartDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseStartDateOffsetPeriod.Tag = '40131';

ProvisionOptionExerciseStartDateOffsetPeriod.Type = 'INT';

module.exports = ProvisionOptionExerciseStartDateOffsetPeriod;