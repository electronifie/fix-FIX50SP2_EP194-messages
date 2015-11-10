var invert = require('invert-obj');

function TradePriceNegotiationMethod (tradePriceNegotiationMethod) {
  this.message = tradePriceNegotiationMethod;
}

TradePriceNegotiationMethod.prototype.value = function () {
  return this.message;
};


TradePriceNegotiationMethod.Keys = {
  'PERCENT_OF_PAR': '0',
  'DEAL_SPREAD': '1',
  'UPFRONT_POINTS': '2',
  'UPFRONT_AMOUNT': '3',
  'PERCENT_OF_PAR_AND_UPFRONT_AMOUNT': '4',
  'DEAL_SPREAD_AND_UPFRONT_AMOUNT': '5',
  'UPFRONT_POINTS_AND_UPFRONT_AMOUNT': '6',
};

TradePriceNegotiationMethod.Tag = '1740';

TradePriceNegotiationMethod.Type = 'INT';

TradePriceNegotiationMethod.Values = invert(TradePriceNegotiationMethod.Keys);

module.exports = TradePriceNegotiationMethod;