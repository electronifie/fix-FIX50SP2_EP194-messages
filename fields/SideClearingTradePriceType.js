var invert = require('invert-obj');

function SideClearingTradePriceType (sideClearingTradePriceType) {
  this.message = sideClearingTradePriceType;
}

SideClearingTradePriceType.prototype.value = function () {
  return this.message;
};


SideClearingTradePriceType.Keys = {
  'TRADE_CLEARING_AT_EXECUTION_PRICE': '0',
  'TRADE_CLEARING_AT_ALTERNATE_CLEARING_PRICE': '1',
};

SideClearingTradePriceType.Tag = '1598';

SideClearingTradePriceType.Type = 'INT';

SideClearingTradePriceType.Values = invert(SideClearingTradePriceType.Keys);

module.exports = SideClearingTradePriceType;