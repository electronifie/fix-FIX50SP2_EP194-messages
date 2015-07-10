var invert = require('invert-obj');

function LegProvisionOptionExerciseFrequencyUnit (legProvisionOptionExerciseFrequencyUnit) {
  this.message = legProvisionOptionExerciseFrequencyUnit;
}

LegProvisionOptionExerciseFrequencyUnit.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseFrequencyUnit.Tag = '40481';

LegProvisionOptionExerciseFrequencyUnit.Type = 'STRING';

module.exports = LegProvisionOptionExerciseFrequencyUnit;