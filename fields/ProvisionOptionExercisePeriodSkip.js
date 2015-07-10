var invert = require('invert-obj');

function ProvisionOptionExercisePeriodSkip (provisionOptionExercisePeriodSkip) {
  this.message = provisionOptionExercisePeriodSkip;
}

ProvisionOptionExercisePeriodSkip.prototype.value = function () {
  return this.message;
};

ProvisionOptionExercisePeriodSkip.Tag = '40135';

ProvisionOptionExercisePeriodSkip.Type = 'INT';

module.exports = ProvisionOptionExercisePeriodSkip;