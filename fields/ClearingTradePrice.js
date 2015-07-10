var invert = require('invert-obj');

function ClearingTradePrice (clearingTradePrice) {
  this.message = clearingTradePrice;
}

ClearingTradePrice.prototype.value = function () {
  return this.message;
};

ClearingTradePrice.Tag = '1596';

ClearingTradePrice.Type = 'PRICE';

module.exports = ClearingTradePrice;