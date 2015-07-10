var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseConfirmation (underlyingProvisionOptionExerciseConfirmation) {
  this.message = underlyingProvisionOptionExerciseConfirmation;
}

UnderlyingProvisionOptionExerciseConfirmation.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseConfirmation.Tag = '42165';

UnderlyingProvisionOptionExerciseConfirmation.Type = 'BOOLEAN';

module.exports = UnderlyingProvisionOptionExerciseConfirmation;