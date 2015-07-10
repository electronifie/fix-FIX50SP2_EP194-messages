var invert = require('invert-obj');

function EncodedUnderlyingEventTextLen (encodedUnderlyingEventTextLen) {
  this.message = encodedUnderlyingEventTextLen;
}

EncodedUnderlyingEventTextLen.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingEventTextLen.Tag = '2072';

EncodedUnderlyingEventTextLen.Type = 'LENGTH';

module.exports = EncodedUnderlyingEventTextLen;