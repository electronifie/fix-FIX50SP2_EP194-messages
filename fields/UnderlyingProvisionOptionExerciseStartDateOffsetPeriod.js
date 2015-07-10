var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseStartDateOffsetPeriod (underlyingProvisionOptionExerciseStartDateOffsetPeriod) {
  this.message = underlyingProvisionOptionExerciseStartDateOffsetPeriod;
}

UnderlyingProvisionOptionExerciseStartDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseStartDateOffsetPeriod.Tag = '42122';

UnderlyingProvisionOptionExerciseStartDateOffsetPeriod.Type = 'INT';

module.exports = UnderlyingProvisionOptionExerciseStartDateOffsetPeriod;