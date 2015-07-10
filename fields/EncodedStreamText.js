var invert = require('invert-obj');

function EncodedStreamText (encodedStreamText) {
  this.message = encodedStreamText;
}

EncodedStreamText.prototype.value = function () {
  return this.message;
};

EncodedStreamText.Tag = '40983';

EncodedStreamText.Type = 'DATA';

module.exports = EncodedStreamText;