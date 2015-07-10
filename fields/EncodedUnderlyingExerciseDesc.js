var invert = require('invert-obj');

function EncodedUnderlyingExerciseDesc (encodedUnderlyingExerciseDesc) {
  this.message = encodedUnderlyingExerciseDesc;
}

EncodedUnderlyingExerciseDesc.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingExerciseDesc.Tag = '41812';

EncodedUnderlyingExerciseDesc.Type = 'DATA';

module.exports = EncodedUnderlyingExerciseDesc;