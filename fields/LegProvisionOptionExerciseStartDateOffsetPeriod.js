var invert = require('invert-obj');

function LegProvisionOptionExerciseStartDateOffsetPeriod (legProvisionOptionExerciseStartDateOffsetPeriod) {
  this.message = legProvisionOptionExerciseStartDateOffsetPeriod;
}

LegProvisionOptionExerciseStartDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseStartDateOffsetPeriod.Tag = '40484';

LegProvisionOptionExerciseStartDateOffsetPeriod.Type = 'INT';

module.exports = LegProvisionOptionExerciseStartDateOffsetPeriod;