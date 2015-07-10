var invert = require('invert-obj');

function ExerciseConfirmationMethod (exerciseConfirmationMethod) {
  this.message = exerciseConfirmationMethod;
}

ExerciseConfirmationMethod.prototype.value = function () {
  return this.message;
};


ExerciseConfirmationMethod.Keys = {
  NOT_REQUIRED: '0',
  NON_ELECTRONIC: '1',
  ELECTRONIC: '2',
  UNKNOWN_AT_TIME_OF_REPORT: '3',
};

ExerciseConfirmationMethod.Tag = '41111';

ExerciseConfirmationMethod.Type = 'INT';

ExerciseConfirmationMethod.Values = invert(ExerciseConfirmationMethod.Keys);

module.exports = ExerciseConfirmationMethod;