var invert = require('invert-obj');

function TradeMatchTimestamp (tradeMatchTimestamp) {
  this.message = tradeMatchTimestamp;
}

TradeMatchTimestamp.prototype.value = function () {
  return this.message;
};

TradeMatchTimestamp.Tag = '1888';

TradeMatchTimestamp.Type = 'UTCTIMESTAMP';

module.exports = TradeMatchTimestamp;