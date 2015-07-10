var invert = require('invert-obj');

function EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDesc (encodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDesc) {
  this.message = encodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDesc;
}

EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDesc.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDesc.Tag = '41874';

EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDesc.Type = 'DATA';

module.exports = EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDesc;