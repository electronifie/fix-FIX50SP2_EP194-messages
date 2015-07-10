var invert = require('invert-obj');

function LegMarketDisruptionFallbackUnderlierSecurityDesc (legMarketDisruptionFallbackUnderlierSecurityDesc) {
  this.message = legMarketDisruptionFallbackUnderlierSecurityDesc;
}

LegMarketDisruptionFallbackUnderlierSecurityDesc.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionFallbackUnderlierSecurityDesc.Tag = '41475';

LegMarketDisruptionFallbackUnderlierSecurityDesc.Type = 'STRING';

module.exports = LegMarketDisruptionFallbackUnderlierSecurityDesc;