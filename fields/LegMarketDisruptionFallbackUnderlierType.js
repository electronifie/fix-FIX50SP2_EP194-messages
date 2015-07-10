var invert = require('invert-obj');

function LegMarketDisruptionFallbackUnderlierType (legMarketDisruptionFallbackUnderlierType) {
  this.message = legMarketDisruptionFallbackUnderlierType;
}

LegMarketDisruptionFallbackUnderlierType.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionFallbackUnderlierType.Tag = '41472';

LegMarketDisruptionFallbackUnderlierType.Type = 'INT';

module.exports = LegMarketDisruptionFallbackUnderlierType;