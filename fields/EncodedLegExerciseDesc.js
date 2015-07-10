var invert = require('invert-obj');

function EncodedLegExerciseDesc (encodedLegExerciseDesc) {
  this.message = encodedLegExerciseDesc;
}

EncodedLegExerciseDesc.prototype.value = function () {
  return this.message;
};

EncodedLegExerciseDesc.Tag = '41483';

EncodedLegExerciseDesc.Type = 'DATA';

module.exports = EncodedLegExerciseDesc;