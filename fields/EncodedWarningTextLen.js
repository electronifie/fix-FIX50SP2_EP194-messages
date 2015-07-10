var invert = require('invert-obj');

function EncodedWarningTextLen (encodedWarningTextLen) {
  this.message = encodedWarningTextLen;
}

EncodedWarningTextLen.prototype.value = function () {
  return this.message;
};

EncodedWarningTextLen.Tag = '2522';

EncodedWarningTextLen.Type = 'LENGTH';

module.exports = EncodedWarningTextLen;