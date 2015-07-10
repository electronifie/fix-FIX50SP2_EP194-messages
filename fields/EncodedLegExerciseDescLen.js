var invert = require('invert-obj');

function EncodedLegExerciseDescLen (encodedLegExerciseDescLen) {
  this.message = encodedLegExerciseDescLen;
}

EncodedLegExerciseDescLen.prototype.value = function () {
  return this.message;
};

EncodedLegExerciseDescLen.Tag = '41482';

EncodedLegExerciseDescLen.Type = 'LENGTH';

module.exports = EncodedLegExerciseDescLen;