var invert = require('invert-obj');

function EncodedMarketDisruptionFallbackUnderlierSecurityDescLen (encodedMarketDisruptionFallbackUnderlierSecurityDescLen) {
  this.message = encodedMarketDisruptionFallbackUnderlierSecurityDescLen;
}

EncodedMarketDisruptionFallbackUnderlierSecurityDescLen.prototype.value = function () {
  return this.message;
};

EncodedMarketDisruptionFallbackUnderlierSecurityDescLen.Tag = '41101';

EncodedMarketDisruptionFallbackUnderlierSecurityDescLen.Type = 'LENGTH';

module.exports = EncodedMarketDisruptionFallbackUnderlierSecurityDescLen;