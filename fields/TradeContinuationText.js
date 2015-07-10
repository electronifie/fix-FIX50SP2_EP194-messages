var invert = require('invert-obj');

function TradeContinuationText (tradeContinuationText) {
  this.message = tradeContinuationText;
}

TradeContinuationText.prototype.value = function () {
  return this.message;
};

TradeContinuationText.Tag = '2374';

TradeContinuationText.Type = 'STRING';

module.exports = TradeContinuationText;