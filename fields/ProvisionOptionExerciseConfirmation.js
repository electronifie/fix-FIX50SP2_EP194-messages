var invert = require('invert-obj');

function ProvisionOptionExerciseConfirmation (provisionOptionExerciseConfirmation) {
  this.message = provisionOptionExerciseConfirmation;
}

ProvisionOptionExerciseConfirmation.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseConfirmation.Tag = '40107';

ProvisionOptionExerciseConfirmation.Type = 'BOOLEAN';

module.exports = ProvisionOptionExerciseConfirmation;