var invert = require('invert-obj');

function UnderlyingMarketDisruptionFallbackUnderlierSecurityIDSource (underlyingMarketDisruptionFallbackUnderlierSecurityIdsource) {
  this.message = underlyingMarketDisruptionFallbackUnderlierSecurityIdsource;
}

UnderlyingMarketDisruptionFallbackUnderlierSecurityIDSource.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionFallbackUnderlierSecurityIDSource.Tag = '41871';

UnderlyingMarketDisruptionFallbackUnderlierSecurityIDSource.Type = 'STRING';

module.exports = UnderlyingMarketDisruptionFallbackUnderlierSecurityIDSource;