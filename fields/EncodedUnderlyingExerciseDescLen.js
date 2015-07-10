var invert = require('invert-obj');

function EncodedUnderlyingExerciseDescLen (encodedUnderlyingExerciseDescLen) {
  this.message = encodedUnderlyingExerciseDescLen;
}

EncodedUnderlyingExerciseDescLen.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingExerciseDescLen.Tag = '41811';

EncodedUnderlyingExerciseDescLen.Type = 'LENGTH';

module.exports = EncodedUnderlyingExerciseDescLen;