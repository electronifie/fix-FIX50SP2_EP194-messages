var invert = require('invert-obj');

function LegMarketDisruptionFallbackUnderlierSecurityIDSource (legMarketDisruptionFallbackUnderlierSecurityIdsource) {
  this.message = legMarketDisruptionFallbackUnderlierSecurityIdsource;
}

LegMarketDisruptionFallbackUnderlierSecurityIDSource.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionFallbackUnderlierSecurityIDSource.Tag = '41474';

LegMarketDisruptionFallbackUnderlierSecurityIDSource.Type = 'STRING';

module.exports = LegMarketDisruptionFallbackUnderlierSecurityIDSource;