var invert = require('invert-obj');

function UnderlyingExerciseConfirmationMethod (underlyingExerciseConfirmationMethod) {
  this.message = underlyingExerciseConfirmationMethod;
}

UnderlyingExerciseConfirmationMethod.prototype.value = function () {
  return this.message;
};

UnderlyingExerciseConfirmationMethod.Tag = '41815';

UnderlyingExerciseConfirmationMethod.Type = 'INT';

module.exports = UnderlyingExerciseConfirmationMethod;