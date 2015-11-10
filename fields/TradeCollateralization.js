var invert = require('invert-obj');

function TradeCollateralization (tradeCollateralization) {
  this.message = tradeCollateralization;
}

TradeCollateralization.prototype.value = function () {
  return this.message;
};


TradeCollateralization.Keys = {
  'UNCOLLATERALIZED': '0',
  'PARTIALLY_COLLATERALIZED': '1',
  'ONE_WAY_COLLATERALLIZATION': '2',
  'FULLY_COLLATERALIZED': '3',
};

TradeCollateralization.Tag = '1936';

TradeCollateralization.Type = 'INT';

TradeCollateralization.Values = invert(TradeCollateralization.Keys);

module.exports = TradeCollateralization;