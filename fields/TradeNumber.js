var invert = require('invert-obj');

function TradeNumber (tradeNumber) {
  this.message = tradeNumber;
}

TradeNumber.prototype.value = function () {
  return this.message;
};

TradeNumber.Tag = '2490';

TradeNumber.Type = 'INT';

module.exports = TradeNumber;