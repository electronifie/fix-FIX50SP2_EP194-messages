var invert = require('invert-obj');

function EncodedLegMarketDisruptionFallbackUnderlierSecurityDescLen (encodedLegMarketDisruptionFallbackUnderlierSecurityDescLen) {
  this.message = encodedLegMarketDisruptionFallbackUnderlierSecurityDescLen;
}

EncodedLegMarketDisruptionFallbackUnderlierSecurityDescLen.prototype.value = function () {
  return this.message;
};

EncodedLegMarketDisruptionFallbackUnderlierSecurityDescLen.Tag = '41476';

EncodedLegMarketDisruptionFallbackUnderlierSecurityDescLen.Type = 'LENGTH';

module.exports = EncodedLegMarketDisruptionFallbackUnderlierSecurityDescLen;