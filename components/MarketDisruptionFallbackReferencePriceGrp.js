var NoMarketDisruptionFallbackReferencePrices = require('../fields/NoMarketDisruptionFallbackReferencePrices');
var MarketDisruptionFallbackUnderlierType = require('../fields/MarketDisruptionFallbackUnderlierType');
var MarketDisruptionFallbackUnderlierSecurityID = require('../fields/MarketDisruptionFallbackUnderlierSecurityID');
var MarketDisruptionFallbackUnderlierSecurityIDSource = require('../fields/MarketDisruptionFallbackUnderlierSecurityIDSource');
var MarketDisruptionFallbackUnderlierSecurityDesc = require('../fields/MarketDisruptionFallbackUnderlierSecurityDesc');
var EncodedMarketDisruptionFallbackUnderlierSecurityDescLen = require('../fields/EncodedMarketDisruptionFallbackUnderlierSecurityDescLen');
var EncodedMarketDisruptionFallbackUnderlierSecurityDesc = require('../fields/EncodedMarketDisruptionFallbackUnderlierSecurityDesc');
var MarketDisruptionFallbackOpenUnits = require('../fields/MarketDisruptionFallbackOpenUnits');
var MarketDisruptionFallbackBasketCurrency = require('../fields/MarketDisruptionFallbackBasketCurrency');
var MarketDisruptionFallbackBasketDivisor = require('../fields/MarketDisruptionFallbackBasketDivisor');

function MarketDisruptionFallbackReferencePriceGrp (marketDisruptionFallbackReferencePriceGrp) {
  this.message = marketDisruptionFallbackReferencePriceGrp;
}

/* group */

/* field */
MarketDisruptionFallbackReferencePriceGrp.prototype.marketDisruptionFallbackUnderlierType = function () {
  return new MarketDisruptionFallbackUnderlierType(this.message.tags[MarketDisruptionFallbackUnderlierType.Tag]);
};

/* field */
MarketDisruptionFallbackReferencePriceGrp.prototype.marketDisruptionFallbackUnderlierSecurityId = function () {
  return new MarketDisruptionFallbackUnderlierSecurityID(this.message.tags[MarketDisruptionFallbackUnderlierSecurityID.Tag]);
};

/* field */
MarketDisruptionFallbackReferencePriceGrp.prototype.marketDisruptionFallbackUnderlierSecurityIdsource = function () {
  return new MarketDisruptionFallbackUnderlierSecurityIDSource(this.message.tags[MarketDisruptionFallbackUnderlierSecurityIDSource.Tag]);
};

/* field */
MarketDisruptionFallbackReferencePriceGrp.prototype.marketDisruptionFallbackUnderlierSecurityDesc = function () {
  return new MarketDisruptionFallbackUnderlierSecurityDesc(this.message.tags[MarketDisruptionFallbackUnderlierSecurityDesc.Tag]);
};

/* field */
MarketDisruptionFallbackReferencePriceGrp.prototype.encodedMarketDisruptionFallbackUnderlierSecurityDescLen = function () {
  return new EncodedMarketDisruptionFallbackUnderlierSecurityDescLen(this.message.tags[EncodedMarketDisruptionFallbackUnderlierSecurityDescLen.Tag]);
};

/* field */
MarketDisruptionFallbackReferencePriceGrp.prototype.encodedMarketDisruptionFallbackUnderlierSecurityDesc = function () {
  return new EncodedMarketDisruptionFallbackUnderlierSecurityDesc(this.message.tags[EncodedMarketDisruptionFallbackUnderlierSecurityDesc.Tag]);
};

/* field */
MarketDisruptionFallbackReferencePriceGrp.prototype.marketDisruptionFallbackOpenUnits = function () {
  return new MarketDisruptionFallbackOpenUnits(this.message.tags[MarketDisruptionFallbackOpenUnits.Tag]);
};

/* field */
MarketDisruptionFallbackReferencePriceGrp.prototype.marketDisruptionFallbackBasketCurrency = function () {
  return new MarketDisruptionFallbackBasketCurrency(this.message.tags[MarketDisruptionFallbackBasketCurrency.Tag]);
};

/* field */
MarketDisruptionFallbackReferencePriceGrp.prototype.marketDisruptionFallbackBasketDivisor = function () {
  return new MarketDisruptionFallbackBasketDivisor(this.message.tags[MarketDisruptionFallbackBasketDivisor.Tag]);
};

/* end group */

MarketDisruptionFallbackReferencePriceGrp.Tag = '41096';

module.exports = MarketDisruptionFallbackReferencePriceGrp;