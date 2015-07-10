var invert = require('invert-obj');

function LegProvisionOptionExerciseFrequencyPeriod (legProvisionOptionExerciseFrequencyPeriod) {
  this.message = legProvisionOptionExerciseFrequencyPeriod;
}

LegProvisionOptionExerciseFrequencyPeriod.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseFrequencyPeriod.Tag = '40480';

LegProvisionOptionExerciseFrequencyPeriod.Type = 'INT';

module.exports = LegProvisionOptionExerciseFrequencyPeriod;