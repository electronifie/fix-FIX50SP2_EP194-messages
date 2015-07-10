var invert = require('invert-obj');

function LegMarketDisruptionMaximumDays (legMarketDisruptionMaximumDays) {
  this.message = legMarketDisruptionMaximumDays;
}

LegMarketDisruptionMaximumDays.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionMaximumDays.Tag = '41464';

LegMarketDisruptionMaximumDays.Type = 'INT';

module.exports = LegMarketDisruptionMaximumDays;