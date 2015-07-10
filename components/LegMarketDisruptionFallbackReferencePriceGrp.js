var NoLegMarketDisruptionFallbackReferencePrices = require('../fields/NoLegMarketDisruptionFallbackReferencePrices');
var LegMarketDisruptionFallbackUnderlierType = require('../fields/LegMarketDisruptionFallbackUnderlierType');
var LegMarketDisruptionFallbackUnderlierSecurityID = require('../fields/LegMarketDisruptionFallbackUnderlierSecurityID');
var LegMarketDisruptionFallbackUnderlierSecurityIDSource = require('../fields/LegMarketDisruptionFallbackUnderlierSecurityIDSource');
var LegMarketDisruptionFallbackUnderlierSecurityDesc = require('../fields/LegMarketDisruptionFallbackUnderlierSecurityDesc');
var EncodedLegMarketDisruptionFallbackUnderlierSecurityDescLen = require('../fields/EncodedLegMarketDisruptionFallbackUnderlierSecurityDescLen');
var EncodedLegMarketDisruptionFallbackUnderlierSecurityDesc = require('../fields/EncodedLegMarketDisruptionFallbackUnderlierSecurityDesc');
var LegMarketDisruptionFallbackOpenUnits = require('../fields/LegMarketDisruptionFallbackOpenUnits');
var LegMarketDisruptionFallbackBasketCurrency = require('../fields/LegMarketDisruptionFallbackBasketCurrency');
var LegMarketDisruptionFallbackBasketDivisor = require('../fields/LegMarketDisruptionFallbackBasketDivisor');

function LegMarketDisruptionFallbackReferencePriceGrp (legMarketDisruptionFallbackReferencePriceGrp) {
  this.message = legMarketDisruptionFallbackReferencePriceGrp;
}

/* group */

/* field */
LegMarketDisruptionFallbackReferencePriceGrp.prototype.legMarketDisruptionFallbackUnderlierType = function () {
  return new LegMarketDisruptionFallbackUnderlierType(this.message.tags[LegMarketDisruptionFallbackUnderlierType.Tag]);
};

/* field */
LegMarketDisruptionFallbackReferencePriceGrp.prototype.legMarketDisruptionFallbackUnderlierSecurityId = function () {
  return new LegMarketDisruptionFallbackUnderlierSecurityID(this.message.tags[LegMarketDisruptionFallbackUnderlierSecurityID.Tag]);
};

/* field */
LegMarketDisruptionFallbackReferencePriceGrp.prototype.legMarketDisruptionFallbackUnderlierSecurityIdsource = function () {
  return new LegMarketDisruptionFallbackUnderlierSecurityIDSource(this.message.tags[LegMarketDisruptionFallbackUnderlierSecurityIDSource.Tag]);
};

/* field */
LegMarketDisruptionFallbackReferencePriceGrp.prototype.legMarketDisruptionFallbackUnderlierSecurityDesc = function () {
  return new LegMarketDisruptionFallbackUnderlierSecurityDesc(this.message.tags[LegMarketDisruptionFallbackUnderlierSecurityDesc.Tag]);
};

/* field */
LegMarketDisruptionFallbackReferencePriceGrp.prototype.encodedLegMarketDisruptionFallbackUnderlierSecurityDescLen = function () {
  return new EncodedLegMarketDisruptionFallbackUnderlierSecurityDescLen(this.message.tags[EncodedLegMarketDisruptionFallbackUnderlierSecurityDescLen.Tag]);
};

/* field */
LegMarketDisruptionFallbackReferencePriceGrp.prototype.encodedLegMarketDisruptionFallbackUnderlierSecurityDesc = function () {
  return new EncodedLegMarketDisruptionFallbackUnderlierSecurityDesc(this.message.tags[EncodedLegMarketDisruptionFallbackUnderlierSecurityDesc.Tag]);
};

/* field */
LegMarketDisruptionFallbackReferencePriceGrp.prototype.legMarketDisruptionFallbackOpenUnits = function () {
  return new LegMarketDisruptionFallbackOpenUnits(this.message.tags[LegMarketDisruptionFallbackOpenUnits.Tag]);
};

/* field */
LegMarketDisruptionFallbackReferencePriceGrp.prototype.legMarketDisruptionFallbackBasketCurrency = function () {
  return new LegMarketDisruptionFallbackBasketCurrency(this.message.tags[LegMarketDisruptionFallbackBasketCurrency.Tag]);
};

/* field */
LegMarketDisruptionFallbackReferencePriceGrp.prototype.legMarketDisruptionFallbackBasketDivisor = function () {
  return new LegMarketDisruptionFallbackBasketDivisor(this.message.tags[LegMarketDisruptionFallbackBasketDivisor.Tag]);
};

/* end group */

LegMarketDisruptionFallbackReferencePriceGrp.Tag = '41471';

module.exports = LegMarketDisruptionFallbackReferencePriceGrp;