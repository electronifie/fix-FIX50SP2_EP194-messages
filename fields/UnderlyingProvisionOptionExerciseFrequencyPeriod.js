var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseFrequencyPeriod (underlyingProvisionOptionExerciseFrequencyPeriod) {
  this.message = underlyingProvisionOptionExerciseFrequencyPeriod;
}

UnderlyingProvisionOptionExerciseFrequencyPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseFrequencyPeriod.Tag = '42118';

UnderlyingProvisionOptionExerciseFrequencyPeriod.Type = 'INT';

module.exports = UnderlyingProvisionOptionExerciseFrequencyPeriod;