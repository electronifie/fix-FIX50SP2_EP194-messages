var invert = require('invert-obj');

function MarketDisruptionFallbackUnderlierSecurityIDSource (marketDisruptionFallbackUnderlierSecurityIdsource) {
  this.message = marketDisruptionFallbackUnderlierSecurityIdsource;
}

MarketDisruptionFallbackUnderlierSecurityIDSource.prototype.value = function () {
  return this.message;
};

MarketDisruptionFallbackUnderlierSecurityIDSource.Tag = '41099';

MarketDisruptionFallbackUnderlierSecurityIDSource.Type = 'STRING';

module.exports = MarketDisruptionFallbackUnderlierSecurityIDSource;