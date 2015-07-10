var invert = require('invert-obj');

function LegProvisionOptionExerciseConfirmation (legProvisionOptionExerciseConfirmation) {
  this.message = legProvisionOptionExerciseConfirmation;
}

LegProvisionOptionExerciseConfirmation.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseConfirmation.Tag = '40465';

LegProvisionOptionExerciseConfirmation.Type = 'BOOLEAN';

module.exports = LegProvisionOptionExerciseConfirmation;