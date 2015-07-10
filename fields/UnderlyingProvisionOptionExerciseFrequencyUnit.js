var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseFrequencyUnit (underlyingProvisionOptionExerciseFrequencyUnit) {
  this.message = underlyingProvisionOptionExerciseFrequencyUnit;
}

UnderlyingProvisionOptionExerciseFrequencyUnit.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseFrequencyUnit.Tag = '42119';

UnderlyingProvisionOptionExerciseFrequencyUnit.Type = 'STRING';

module.exports = UnderlyingProvisionOptionExerciseFrequencyUnit;