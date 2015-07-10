var invert = require('invert-obj');

function EncodedEventTextLen (encodedEventTextLen) {
  this.message = encodedEventTextLen;
}

EncodedEventTextLen.prototype.value = function () {
  return this.message;
};

EncodedEventTextLen.Tag = '1578';

EncodedEventTextLen.Type = 'LENGTH';

module.exports = EncodedEventTextLen;