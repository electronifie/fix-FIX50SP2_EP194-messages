var invert = require('invert-obj');

function MarketDisruptionFallbackUnderlierType (marketDisruptionFallbackUnderlierType) {
  this.message = marketDisruptionFallbackUnderlierType;
}

MarketDisruptionFallbackUnderlierType.prototype.value = function () {
  return this.message;
};


MarketDisruptionFallbackUnderlierType.Keys = {
  BASKET: '0',
  BOND: '1',
  CASH: '2',
  COMMODITY: '3',
  CONVERTIBLE_BOND: '4',
  EQUITY: '5',
  EXCHANGE_TRADED_FUND: '6',
  FUTURE: '7',
  INDEX: '8',
  LOAN: '9',
  MORTGAGE: '10',
  MUTUAL_FUND: '11',
};

MarketDisruptionFallbackUnderlierType.Tag = '41097';

MarketDisruptionFallbackUnderlierType.Type = 'INT';

MarketDisruptionFallbackUnderlierType.Values = invert(MarketDisruptionFallbackUnderlierType.Keys);

module.exports = MarketDisruptionFallbackUnderlierType;