var invert = require('invert-obj');

function EncodedExerciseDesc (encodedExerciseDesc) {
  this.message = encodedExerciseDesc;
}

EncodedExerciseDesc.prototype.value = function () {
  return this.message;
};

EncodedExerciseDesc.Tag = '41108';

EncodedExerciseDesc.Type = 'DATA';

module.exports = EncodedExerciseDesc;