var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseEarliestDatePeriod (underlyingProvisionOptionExerciseEarliestDatePeriod) {
  this.message = underlyingProvisionOptionExerciseEarliestDatePeriod;
}

UnderlyingProvisionOptionExerciseEarliestDatePeriod.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseEarliestDatePeriod.Tag = '42116';

UnderlyingProvisionOptionExerciseEarliestDatePeriod.Type = 'INT';

module.exports = UnderlyingProvisionOptionExerciseEarliestDatePeriod;