var invert = require('invert-obj');

function ProvisionOptionExerciseFrequencyPeriod (provisionOptionExerciseFrequencyPeriod) {
  this.message = provisionOptionExerciseFrequencyPeriod;
}

ProvisionOptionExerciseFrequencyPeriod.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseFrequencyPeriod.Tag = '40127';

ProvisionOptionExerciseFrequencyPeriod.Type = 'INT';

module.exports = ProvisionOptionExerciseFrequencyPeriod;