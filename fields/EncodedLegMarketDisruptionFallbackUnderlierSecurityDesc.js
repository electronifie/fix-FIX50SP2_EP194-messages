var invert = require('invert-obj');

function EncodedLegMarketDisruptionFallbackUnderlierSecurityDesc (encodedLegMarketDisruptionFallbackUnderlierSecurityDesc) {
  this.message = encodedLegMarketDisruptionFallbackUnderlierSecurityDesc;
}

EncodedLegMarketDisruptionFallbackUnderlierSecurityDesc.prototype.value = function () {
  return this.message;
};

EncodedLegMarketDisruptionFallbackUnderlierSecurityDesc.Tag = '41477';

EncodedLegMarketDisruptionFallbackUnderlierSecurityDesc.Type = 'DATA';

module.exports = EncodedLegMarketDisruptionFallbackUnderlierSecurityDesc;