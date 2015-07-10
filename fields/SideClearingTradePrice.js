var invert = require('invert-obj');

function SideClearingTradePrice (sideClearingTradePrice) {
  this.message = sideClearingTradePrice;
}

SideClearingTradePrice.prototype.value = function () {
  return this.message;
};

SideClearingTradePrice.Tag = '1597';

SideClearingTradePrice.Type = 'PRICE';

module.exports = SideClearingTradePrice;