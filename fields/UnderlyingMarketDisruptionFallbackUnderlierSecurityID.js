var invert = require('invert-obj');

function UnderlyingMarketDisruptionFallbackUnderlierSecurityID (underlyingMarketDisruptionFallbackUnderlierSecurityId) {
  this.message = underlyingMarketDisruptionFallbackUnderlierSecurityId;
}

UnderlyingMarketDisruptionFallbackUnderlierSecurityID.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionFallbackUnderlierSecurityID.Tag = '41870';

UnderlyingMarketDisruptionFallbackUnderlierSecurityID.Type = 'STRING';

module.exports = UnderlyingMarketDisruptionFallbackUnderlierSecurityID;