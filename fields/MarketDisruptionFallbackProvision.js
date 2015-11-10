var invert = require('invert-obj');

function MarketDisruptionFallbackProvision (marketDisruptionFallbackProvision) {
  this.message = marketDisruptionFallbackProvision;
}

MarketDisruptionFallbackProvision.prototype.value = function () {
  return this.message;
};


MarketDisruptionFallbackProvision.Keys = {
  'AS_SPECIFIED_IN_MASTER_AGREEMENT': '0',
  'AS_SPECIFIED_IN_CONFIRMATION': '1',
};

MarketDisruptionFallbackProvision.Tag = '41088';

MarketDisruptionFallbackProvision.Type = 'INT';

MarketDisruptionFallbackProvision.Values = invert(MarketDisruptionFallbackProvision.Keys);

module.exports = MarketDisruptionFallbackProvision;