var invert = require('invert-obj');

function ProvisionOptionExerciseFrequencyUnit (provisionOptionExerciseFrequencyUnit) {
  this.message = provisionOptionExerciseFrequencyUnit;
}

ProvisionOptionExerciseFrequencyUnit.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseFrequencyUnit.Tag = '40128';

ProvisionOptionExerciseFrequencyUnit.Type = 'STRING';

module.exports = ProvisionOptionExerciseFrequencyUnit;