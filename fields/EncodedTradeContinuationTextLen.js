var invert = require('invert-obj');

function EncodedTradeContinuationTextLen (encodedTradeContinuationTextLen) {
  this.message = encodedTradeContinuationTextLen;
}

EncodedTradeContinuationTextLen.prototype.value = function () {
  return this.message;
};

EncodedTradeContinuationTextLen.Tag = '2372';

EncodedTradeContinuationTextLen.Type = 'LENGTH';

module.exports = EncodedTradeContinuationTextLen;