var invert = require('invert-obj');

function LegExerciseConfirmationMethod (legExerciseConfirmationMethod) {
  this.message = legExerciseConfirmationMethod;
}

LegExerciseConfirmationMethod.prototype.value = function () {
  return this.message;
};

LegExerciseConfirmationMethod.Tag = '41486';

LegExerciseConfirmationMethod.Type = 'INT';

module.exports = LegExerciseConfirmationMethod;