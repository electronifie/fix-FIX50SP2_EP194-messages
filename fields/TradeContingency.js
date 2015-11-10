var invert = require('invert-obj');

function TradeContingency (tradeContingency) {
  this.message = tradeContingency;
}

TradeContingency.prototype.value = function () {
  return this.message;
};


TradeContingency.Keys = {
  'DOES_NOT_APPLY': '0',
  'CONTINGENT_TRADE': '1',
  'NON_CONTINGENT_TRADE': '2',
};

TradeContingency.Tag = '2387';

TradeContingency.Type = 'INT';

TradeContingency.Values = invert(TradeContingency.Keys);

module.exports = TradeContingency;