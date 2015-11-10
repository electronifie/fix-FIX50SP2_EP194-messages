var invert = require('invert-obj');

function MarketDisruptionProvision (marketDisruptionProvision) {
  this.message = marketDisruptionProvision;
}

MarketDisruptionProvision.prototype.value = function () {
  return this.message;
};


MarketDisruptionProvision.Keys = {
  'NOT_APPLICABLE': '0',
  'APPLICABLE': '1',
  'AS_SPECIFIED_IN_MASTER_AGREEMENT': '2',
  'AS_SPECIFIED_IN_CONFIRMATION': '3',
};

MarketDisruptionProvision.Tag = '41087';

MarketDisruptionProvision.Type = 'INT';

MarketDisruptionProvision.Values = invert(MarketDisruptionProvision.Keys);

module.exports = MarketDisruptionProvision;