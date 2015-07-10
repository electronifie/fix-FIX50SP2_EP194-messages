var invert = require('invert-obj');

function EncodedTradeContinuationText (encodedTradeContinuationText) {
  this.message = encodedTradeContinuationText;
}

EncodedTradeContinuationText.prototype.value = function () {
  return this.message;
};

EncodedTradeContinuationText.Tag = '2371';

EncodedTradeContinuationText.Type = 'DATA';

module.exports = EncodedTradeContinuationText;