var NoUnderlyingMarketDisruptionFallbackReferencePrices = require('../fields/NoUnderlyingMarketDisruptionFallbackReferencePrices');
var UnderlyingMarketDisruptionFallbackUnderlierType = require('../fields/UnderlyingMarketDisruptionFallbackUnderlierType');
var UnderlyingMarketDisruptionFallbackUnderlierSecurityID = require('../fields/UnderlyingMarketDisruptionFallbackUnderlierSecurityID');
var UnderlyingMarketDisruptionFallbackUnderlierSecurityIDSource = require('../fields/UnderlyingMarketDisruptionFallbackUnderlierSecurityIDSource');
var UnderlyingMarketDisruptionFallbackUnderlierSecurityDesc = require('../fields/UnderlyingMarketDisruptionFallbackUnderlierSecurityDesc');
var EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDescLen = require('../fields/EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDescLen');
var EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDesc = require('../fields/EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDesc');
var UnderlyingMarketDisruptionFallbackOpenUnits = require('../fields/UnderlyingMarketDisruptionFallbackOpenUnits');
var UnderlyingMarketDisruptionFallbackBasketCurrency = require('../fields/UnderlyingMarketDisruptionFallbackBasketCurrency');
var UnderlyingMarketDisruptionFallbackBasketDivisor = require('../fields/UnderlyingMarketDisruptionFallbackBasketDivisor');

function UnderlyingMarketDisruptionFallbackReferencePriceGrp (underlyingMarketDisruptionFallbackReferencePriceGrp) {
  this.message = underlyingMarketDisruptionFallbackReferencePriceGrp;
}

/* group */

/* field */
UnderlyingMarketDisruptionFallbackReferencePriceGrp.prototype.underlyingMarketDisruptionFallbackUnderlierType = function () {
  return new UnderlyingMarketDisruptionFallbackUnderlierType(this.message.tags[UnderlyingMarketDisruptionFallbackUnderlierType.Tag]);
};

/* field */
UnderlyingMarketDisruptionFallbackReferencePriceGrp.prototype.underlyingMarketDisruptionFallbackUnderlierSecurityId = function () {
  return new UnderlyingMarketDisruptionFallbackUnderlierSecurityID(this.message.tags[UnderlyingMarketDisruptionFallbackUnderlierSecurityID.Tag]);
};

/* field */
UnderlyingMarketDisruptionFallbackReferencePriceGrp.prototype.underlyingMarketDisruptionFallbackUnderlierSecurityIdsource = function () {
  return new UnderlyingMarketDisruptionFallbackUnderlierSecurityIDSource(this.message.tags[UnderlyingMarketDisruptionFallbackUnderlierSecurityIDSource.Tag]);
};

/* field */
UnderlyingMarketDisruptionFallbackReferencePriceGrp.prototype.underlyingMarketDisruptionFallbackUnderlierSecurityDesc = function () {
  return new UnderlyingMarketDisruptionFallbackUnderlierSecurityDesc(this.message.tags[UnderlyingMarketDisruptionFallbackUnderlierSecurityDesc.Tag]);
};

/* field */
UnderlyingMarketDisruptionFallbackReferencePriceGrp.prototype.encodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDescLen = function () {
  return new EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDescLen(this.message.tags[EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDescLen.Tag]);
};

/* field */
UnderlyingMarketDisruptionFallbackReferencePriceGrp.prototype.encodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDesc = function () {
  return new EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDesc(this.message.tags[EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDesc.Tag]);
};

/* field */
UnderlyingMarketDisruptionFallbackReferencePriceGrp.prototype.underlyingMarketDisruptionFallbackOpenUnits = function () {
  return new UnderlyingMarketDisruptionFallbackOpenUnits(this.message.tags[UnderlyingMarketDisruptionFallbackOpenUnits.Tag]);
};

/* field */
UnderlyingMarketDisruptionFallbackReferencePriceGrp.prototype.underlyingMarketDisruptionFallbackBasketCurrency = function () {
  return new UnderlyingMarketDisruptionFallbackBasketCurrency(this.message.tags[UnderlyingMarketDisruptionFallbackBasketCurrency.Tag]);
};

/* field */
UnderlyingMarketDisruptionFallbackReferencePriceGrp.prototype.underlyingMarketDisruptionFallbackBasketDivisor = function () {
  return new UnderlyingMarketDisruptionFallbackBasketDivisor(this.message.tags[UnderlyingMarketDisruptionFallbackBasketDivisor.Tag]);
};

/* end group */

UnderlyingMarketDisruptionFallbackReferencePriceGrp.Tag = '41868';

module.exports = UnderlyingMarketDisruptionFallbackReferencePriceGrp;