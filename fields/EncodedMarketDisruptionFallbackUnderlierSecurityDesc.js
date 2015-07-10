var invert = require('invert-obj');

function EncodedMarketDisruptionFallbackUnderlierSecurityDesc (encodedMarketDisruptionFallbackUnderlierSecurityDesc) {
  this.message = encodedMarketDisruptionFallbackUnderlierSecurityDesc;
}

EncodedMarketDisruptionFallbackUnderlierSecurityDesc.prototype.value = function () {
  return this.message;
};

EncodedMarketDisruptionFallbackUnderlierSecurityDesc.Tag = '41102';

EncodedMarketDisruptionFallbackUnderlierSecurityDesc.Type = 'DATA';

module.exports = EncodedMarketDisruptionFallbackUnderlierSecurityDesc;