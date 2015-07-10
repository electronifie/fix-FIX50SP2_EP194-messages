var NoAdditionalTermBondRefs = require('../fields/NoAdditionalTermBondRefs');
var AdditionalTermBondSecurityID = require('../fields/AdditionalTermBondSecurityID');
var AdditionalTermBondSecurityIDSource = require('../fields/AdditionalTermBondSecurityIDSource');
var AdditionalTermBondDesc = require('../fields/AdditionalTermBondDesc');
var EncodedAdditionalTermBondDescLen = require('../fields/EncodedAdditionalTermBondDescLen');
var EncodedAdditionalTermBondDesc = require('../fields/EncodedAdditionalTermBondDesc');
var AdditionalTermBondCurrency = require('../fields/AdditionalTermBondCurrency');
var AdditionalTermBondIssuer = require('../fields/AdditionalTermBondIssuer');
var EncodedAdditionalTermBondIssuerLen = require('../fields/EncodedAdditionalTermBondIssuerLen');
var EncodedAdditionalTermBondIssuer = require('../fields/EncodedAdditionalTermBondIssuer');
var AdditionalTermBondSeniority = require('../fields/AdditionalTermBondSeniority');
var AdditionalTermBondCouponType = require('../fields/AdditionalTermBondCouponType');
var AdditionalTermBondCouponRate = require('../fields/AdditionalTermBondCouponRate');
var AdditionalTermBondMaturityDate = require('../fields/AdditionalTermBondMaturityDate');
var AdditionalTermBondParValue = require('../fields/AdditionalTermBondParValue');
var AdditionalTermBondCurrentTotalIssuedAmount = require('../fields/AdditionalTermBondCurrentTotalIssuedAmount');
var AdditionalTermBondCouponFrequencyPeriod = require('../fields/AdditionalTermBondCouponFrequencyPeriod');
var AdditionalTermBondCouponFrequencyUnit = require('../fields/AdditionalTermBondCouponFrequencyUnit');
var AdditionalTermBondDayCount = require('../fields/AdditionalTermBondDayCount');

function AdditionalTermBondRefGrp (additionalTermBondRefGrp) {
  this.message = additionalTermBondRefGrp;
}

/* group */

/* field */
AdditionalTermBondRefGrp.prototype.additionalTermBondSecurityId = function () {
  return new AdditionalTermBondSecurityID(this.message.tags[AdditionalTermBondSecurityID.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.additionalTermBondSecurityIdsource = function () {
  return new AdditionalTermBondSecurityIDSource(this.message.tags[AdditionalTermBondSecurityIDSource.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.additionalTermBondDesc = function () {
  return new AdditionalTermBondDesc(this.message.tags[AdditionalTermBondDesc.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.encodedAdditionalTermBondDescLen = function () {
  return new EncodedAdditionalTermBondDescLen(this.message.tags[EncodedAdditionalTermBondDescLen.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.encodedAdditionalTermBondDesc = function () {
  return new EncodedAdditionalTermBondDesc(this.message.tags[EncodedAdditionalTermBondDesc.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.additionalTermBondCurrency = function () {
  return new AdditionalTermBondCurrency(this.message.tags[AdditionalTermBondCurrency.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.additionalTermBondIssuer = function () {
  return new AdditionalTermBondIssuer(this.message.tags[AdditionalTermBondIssuer.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.encodedAdditionalTermBondIssuerLen = function () {
  return new EncodedAdditionalTermBondIssuerLen(this.message.tags[EncodedAdditionalTermBondIssuerLen.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.encodedAdditionalTermBondIssuer = function () {
  return new EncodedAdditionalTermBondIssuer(this.message.tags[EncodedAdditionalTermBondIssuer.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.additionalTermBondSeniority = function () {
  return new AdditionalTermBondSeniority(this.message.tags[AdditionalTermBondSeniority.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.additionalTermBondCouponType = function () {
  return new AdditionalTermBondCouponType(this.message.tags[AdditionalTermBondCouponType.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.additionalTermBondCouponRate = function () {
  return new AdditionalTermBondCouponRate(this.message.tags[AdditionalTermBondCouponRate.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.additionalTermBondMaturityDate = function () {
  return new AdditionalTermBondMaturityDate(this.message.tags[AdditionalTermBondMaturityDate.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.additionalTermBondParValue = function () {
  return new AdditionalTermBondParValue(this.message.tags[AdditionalTermBondParValue.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.additionalTermBondCurrentTotalIssuedAmount = function () {
  return new AdditionalTermBondCurrentTotalIssuedAmount(this.message.tags[AdditionalTermBondCurrentTotalIssuedAmount.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.additionalTermBondCouponFrequencyPeriod = function () {
  return new AdditionalTermBondCouponFrequencyPeriod(this.message.tags[AdditionalTermBondCouponFrequencyPeriod.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.additionalTermBondCouponFrequencyUnit = function () {
  return new AdditionalTermBondCouponFrequencyUnit(this.message.tags[AdditionalTermBondCouponFrequencyUnit.Tag]);
};

/* field */
AdditionalTermBondRefGrp.prototype.additionalTermBondDayCount = function () {
  return new AdditionalTermBondDayCount(this.message.tags[AdditionalTermBondDayCount.Tag]);
};

/* end group */

AdditionalTermBondRefGrp.Tag = '40000';

module.exports = AdditionalTermBondRefGrp;