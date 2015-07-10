var invert = require('invert-obj');

function LegMarketDisruptionFallbackProvision (legMarketDisruptionFallbackProvision) {
  this.message = legMarketDisruptionFallbackProvision;
}

LegMarketDisruptionFallbackProvision.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionFallbackProvision.Tag = '41463';

LegMarketDisruptionFallbackProvision.Type = 'INT';

module.exports = LegMarketDisruptionFallbackProvision;