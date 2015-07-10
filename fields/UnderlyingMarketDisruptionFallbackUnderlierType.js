var invert = require('invert-obj');

function UnderlyingMarketDisruptionFallbackUnderlierType (underlyingMarketDisruptionFallbackUnderlierType) {
  this.message = underlyingMarketDisruptionFallbackUnderlierType;
}

UnderlyingMarketDisruptionFallbackUnderlierType.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionFallbackUnderlierType.Tag = '41869';

UnderlyingMarketDisruptionFallbackUnderlierType.Type = 'INT';

module.exports = UnderlyingMarketDisruptionFallbackUnderlierType;