var invert = require('invert-obj');

function EncodedUnderlyingStreamText (encodedUnderlyingStreamText) {
  this.message = encodedUnderlyingStreamText;
}

EncodedUnderlyingStreamText.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingStreamText.Tag = '40989';

EncodedUnderlyingStreamText.Type = 'DATA';

module.exports = EncodedUnderlyingStreamText;