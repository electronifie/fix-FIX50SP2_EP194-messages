var invert = require('invert-obj');

function MarketDisruptionMaximumDays (marketDisruptionMaximumDays) {
  this.message = marketDisruptionMaximumDays;
}

MarketDisruptionMaximumDays.prototype.value = function () {
  return this.message;
};

MarketDisruptionMaximumDays.Tag = '41089';

MarketDisruptionMaximumDays.Type = 'INT';

module.exports = MarketDisruptionMaximumDays;