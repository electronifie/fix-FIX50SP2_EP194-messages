var invert = require('invert-obj');

function TradingCapacity (tradingCapacity) {
  this.message = tradingCapacity;
}

TradingCapacity.prototype.value = function () {
  return this.message;
};


TradingCapacity.Keys = {
  'CUSTOMER': '1',
  'CUSTOMER_PROFESSIONAL': '2',
  'BROKER_DEALER': '3',
  'CUSTOMER_BROKER_DEALER': '4',
  'PRINCIPAL': '5',
  'MARKET_MAKER': '6',
  'AWAY_MARKET_MAKER': '7',
};

TradingCapacity.Tag = '1815';

TradingCapacity.Type = 'INT';

TradingCapacity.Values = invert(TradingCapacity.Keys);

module.exports = TradingCapacity;