var invert = require('invert-obj');

function EncodedRejectTextLen (encodedRejectTextLen) {
  this.message = encodedRejectTextLen;
}

EncodedRejectTextLen.prototype.value = function () {
  return this.message;
};

EncodedRejectTextLen.Tag = '1664';

EncodedRejectTextLen.Type = 'LENGTH';

module.exports = EncodedRejectTextLen;