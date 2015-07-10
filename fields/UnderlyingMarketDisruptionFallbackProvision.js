var invert = require('invert-obj');

function UnderlyingMarketDisruptionFallbackProvision (underlyingMarketDisruptionFallbackProvision) {
  this.message = underlyingMarketDisruptionFallbackProvision;
}

UnderlyingMarketDisruptionFallbackProvision.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionFallbackProvision.Tag = '41860';

UnderlyingMarketDisruptionFallbackProvision.Type = 'INT';

module.exports = UnderlyingMarketDisruptionFallbackProvision;