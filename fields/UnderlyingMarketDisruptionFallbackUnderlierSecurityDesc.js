var invert = require('invert-obj');

function UnderlyingMarketDisruptionFallbackUnderlierSecurityDesc (underlyingMarketDisruptionFallbackUnderlierSecurityDesc) {
  this.message = underlyingMarketDisruptionFallbackUnderlierSecurityDesc;
}

UnderlyingMarketDisruptionFallbackUnderlierSecurityDesc.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionFallbackUnderlierSecurityDesc.Tag = '41872';

UnderlyingMarketDisruptionFallbackUnderlierSecurityDesc.Type = 'STRING';

module.exports = UnderlyingMarketDisruptionFallbackUnderlierSecurityDesc;