var invert = require('invert-obj');

function LegMarketDisruptionFallbackUnderlierSecurityID (legMarketDisruptionFallbackUnderlierSecurityId) {
  this.message = legMarketDisruptionFallbackUnderlierSecurityId;
}

LegMarketDisruptionFallbackUnderlierSecurityID.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionFallbackUnderlierSecurityID.Tag = '41473';

LegMarketDisruptionFallbackUnderlierSecurityID.Type = 'STRING';

module.exports = LegMarketDisruptionFallbackUnderlierSecurityID;