var invert = require('invert-obj');

function MarketDisruptionFallbackUnderlierSecurityDesc (marketDisruptionFallbackUnderlierSecurityDesc) {
  this.message = marketDisruptionFallbackUnderlierSecurityDesc;
}

MarketDisruptionFallbackUnderlierSecurityDesc.prototype.value = function () {
  return this.message;
};

MarketDisruptionFallbackUnderlierSecurityDesc.Tag = '41100';

MarketDisruptionFallbackUnderlierSecurityDesc.Type = 'STRING';

module.exports = MarketDisruptionFallbackUnderlierSecurityDesc;