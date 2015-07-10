var invert = require('invert-obj');

function ExerciseDesc (exerciseDesc) {
  this.message = exerciseDesc;
}

ExerciseDesc.prototype.value = function () {
  return this.message;
};

ExerciseDesc.Tag = '41106';

ExerciseDesc.Type = 'STRING';

module.exports = ExerciseDesc;