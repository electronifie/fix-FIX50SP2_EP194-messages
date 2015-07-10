var invert = require('invert-obj');

function EncodedExerciseDescLen (encodedExerciseDescLen) {
  this.message = encodedExerciseDescLen;
}

EncodedExerciseDescLen.prototype.value = function () {
  return this.message;
};

EncodedExerciseDescLen.Tag = '41107';

EncodedExerciseDescLen.Type = 'LENGTH';

module.exports = EncodedExerciseDescLen;