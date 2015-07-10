var invert = require('invert-obj');

function MarketDisruptionFallbackUnderlierSecurityID (marketDisruptionFallbackUnderlierSecurityId) {
  this.message = marketDisruptionFallbackUnderlierSecurityId;
}

MarketDisruptionFallbackUnderlierSecurityID.prototype.value = function () {
  return this.message;
};

MarketDisruptionFallbackUnderlierSecurityID.Tag = '41098';

MarketDisruptionFallbackUnderlierSecurityID.Type = 'STRING';

module.exports = MarketDisruptionFallbackUnderlierSecurityID;