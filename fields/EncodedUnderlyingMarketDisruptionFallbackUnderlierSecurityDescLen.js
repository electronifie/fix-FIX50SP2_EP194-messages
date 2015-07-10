var invert = require('invert-obj');

function EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDescLen (encodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDescLen) {
  this.message = encodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDescLen;
}

EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDescLen.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDescLen.Tag = '41873';

EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDescLen.Type = 'LENGTH';

module.exports = EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDescLen;