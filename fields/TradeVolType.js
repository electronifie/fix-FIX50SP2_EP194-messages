var invert = require('invert-obj');

function TradeVolType (tradeVolType) {
  this.message = tradeVolType;
}

TradeVolType.prototype.value = function () {
  return this.message;
};


TradeVolType.Keys = {
  'NUMBER_OF_UNITS': '0',
  'NUMBER_OF_ROUND_LOTS': '1',
};

TradeVolType.Tag = '1786';

TradeVolType.Type = 'INT';

TradeVolType.Values = invert(TradeVolType.Keys);

module.exports = TradeVolType;