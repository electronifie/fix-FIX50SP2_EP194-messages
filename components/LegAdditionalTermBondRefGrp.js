var NoLegAdditionalTermBondRefs = require('../fields/NoLegAdditionalTermBondRefs');
var LegAdditionalTermBondSecurityID = require('../fields/LegAdditionalTermBondSecurityID');
var LegAdditionalTermBondSecurityIDSource = require('../fields/LegAdditionalTermBondSecurityIDSource');
var LegAdditionalTermBondDesc = require('../fields/LegAdditionalTermBondDesc');
var EncodedLegAdditionalTermBondDescLen = require('../fields/EncodedLegAdditionalTermBondDescLen');
var EncodedLegAdditionalTermBondDesc = require('../fields/EncodedLegAdditionalTermBondDesc');
var LegAdditionalTermBondCurrency = require('../fields/LegAdditionalTermBondCurrency');
var LegAdditionalTermBondIssuer = require('../fields/LegAdditionalTermBondIssuer');
var EncodedLegAdditionalTermBondIssuerLen = require('../fields/EncodedLegAdditionalTermBondIssuerLen');
var EncodedLegAdditionalTermBondIssuer = require('../fields/EncodedLegAdditionalTermBondIssuer');
var LegAdditionalTermBondSeniority = require('../fields/LegAdditionalTermBondSeniority');
var LegAdditionalTermBondCouponType = require('../fields/LegAdditionalTermBondCouponType');
var LegAdditionalTermBondCouponRate = require('../fields/LegAdditionalTermBondCouponRate');
var LegAdditionalTermBondMaturityDate = require('../fields/LegAdditionalTermBondMaturityDate');
var LegAdditionalTermBondParValue = require('../fields/LegAdditionalTermBondParValue');
var LegAdditionalTermBondCurrentTotalIssuedAmount = require('../fields/LegAdditionalTermBondCurrentTotalIssuedAmount');
var LegAdditionalTermBondCouponFrequencyPeriod = require('../fields/LegAdditionalTermBondCouponFrequencyPeriod');
var LegAdditionalTermBondCouponFrequencyUnit = require('../fields/LegAdditionalTermBondCouponFrequencyUnit');
var LegAdditionalTermBondDayCount = require('../fields/LegAdditionalTermBondDayCount');

function LegAdditionalTermBondRefGrp (legAdditionalTermBondRefGrp) {
  this.message = legAdditionalTermBondRefGrp;
}

/* group */

/* field */
LegAdditionalTermBondRefGrp.prototype.legAdditionalTermBondSecurityId = function () {
  return new LegAdditionalTermBondSecurityID(this.message.tags[LegAdditionalTermBondSecurityID.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.legAdditionalTermBondSecurityIdsource = function () {
  return new LegAdditionalTermBondSecurityIDSource(this.message.tags[LegAdditionalTermBondSecurityIDSource.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.legAdditionalTermBondDesc = function () {
  return new LegAdditionalTermBondDesc(this.message.tags[LegAdditionalTermBondDesc.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.encodedLegAdditionalTermBondDescLen = function () {
  return new EncodedLegAdditionalTermBondDescLen(this.message.tags[EncodedLegAdditionalTermBondDescLen.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.encodedLegAdditionalTermBondDesc = function () {
  return new EncodedLegAdditionalTermBondDesc(this.message.tags[EncodedLegAdditionalTermBondDesc.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.legAdditionalTermBondCurrency = function () {
  return new LegAdditionalTermBondCurrency(this.message.tags[LegAdditionalTermBondCurrency.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.legAdditionalTermBondIssuer = function () {
  return new LegAdditionalTermBondIssuer(this.message.tags[LegAdditionalTermBondIssuer.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.encodedLegAdditionalTermBondIssuerLen = function () {
  return new EncodedLegAdditionalTermBondIssuerLen(this.message.tags[EncodedLegAdditionalTermBondIssuerLen.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.encodedLegAdditionalTermBondIssuer = function () {
  return new EncodedLegAdditionalTermBondIssuer(this.message.tags[EncodedLegAdditionalTermBondIssuer.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.legAdditionalTermBondSeniority = function () {
  return new LegAdditionalTermBondSeniority(this.message.tags[LegAdditionalTermBondSeniority.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.legAdditionalTermBondCouponType = function () {
  return new LegAdditionalTermBondCouponType(this.message.tags[LegAdditionalTermBondCouponType.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.legAdditionalTermBondCouponRate = function () {
  return new LegAdditionalTermBondCouponRate(this.message.tags[LegAdditionalTermBondCouponRate.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.legAdditionalTermBondMaturityDate = function () {
  return new LegAdditionalTermBondMaturityDate(this.message.tags[LegAdditionalTermBondMaturityDate.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.legAdditionalTermBondParValue = function () {
  return new LegAdditionalTermBondParValue(this.message.tags[LegAdditionalTermBondParValue.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.legAdditionalTermBondCurrentTotalIssuedAmount = function () {
  return new LegAdditionalTermBondCurrentTotalIssuedAmount(this.message.tags[LegAdditionalTermBondCurrentTotalIssuedAmount.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.legAdditionalTermBondCouponFrequencyPeriod = function () {
  return new LegAdditionalTermBondCouponFrequencyPeriod(this.message.tags[LegAdditionalTermBondCouponFrequencyPeriod.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.legAdditionalTermBondCouponFrequencyUnit = function () {
  return new LegAdditionalTermBondCouponFrequencyUnit(this.message.tags[LegAdditionalTermBondCouponFrequencyUnit.Tag]);
};

/* field */
LegAdditionalTermBondRefGrp.prototype.legAdditionalTermBondDayCount = function () {
  return new LegAdditionalTermBondDayCount(this.message.tags[LegAdditionalTermBondDayCount.Tag]);
};

/* end group */

LegAdditionalTermBondRefGrp.Tag = '41316';

module.exports = LegAdditionalTermBondRefGrp;