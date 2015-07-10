var invert = require('invert-obj');

function EncodedRejectText (encodedRejectText) {
  this.message = encodedRejectText;
}

EncodedRejectText.prototype.value = function () {
  return this.message;
};

EncodedRejectText.Tag = '1665';

EncodedRejectText.Type = 'DATA';

module.exports = EncodedRejectText;