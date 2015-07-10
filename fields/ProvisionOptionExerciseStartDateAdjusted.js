var invert = require('invert-obj');

function ProvisionOptionExerciseStartDateAdjusted (provisionOptionExerciseStartDateAdjusted) {
  this.message = provisionOptionExerciseStartDateAdjusted;
}

ProvisionOptionExerciseStartDateAdjusted.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseStartDateAdjusted.Tag = '40134';

ProvisionOptionExerciseStartDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = ProvisionOptionExerciseStartDateAdjusted;