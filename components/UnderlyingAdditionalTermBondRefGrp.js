var NoUnderlyingAdditionalTermBondRefs = require('../fields/NoUnderlyingAdditionalTermBondRefs');
var UnderlyingAdditionalTermBondSecurityID = require('../fields/UnderlyingAdditionalTermBondSecurityID');
var UnderlyingAdditionalTermBondSecurityIDSource = require('../fields/UnderlyingAdditionalTermBondSecurityIDSource');
var UnderlyingAdditionalTermBondDesc = require('../fields/UnderlyingAdditionalTermBondDesc');
var EncodedUnderlyingAdditionalTermBondDescLen = require('../fields/EncodedUnderlyingAdditionalTermBondDescLen');
var EncodedUnderlyingAdditionalTermBondDesc = require('../fields/EncodedUnderlyingAdditionalTermBondDesc');
var UnderlyingAdditionalTermBondCurrency = require('../fields/UnderlyingAdditionalTermBondCurrency');
var UnderlyingAdditionalTermBondIssuer = require('../fields/UnderlyingAdditionalTermBondIssuer');
var EncodedUnderlyingAdditionalTermBondIssuerLen = require('../fields/EncodedUnderlyingAdditionalTermBondIssuerLen');
var EncodedUnderlyingAdditionalTermBondIssuer = require('../fields/EncodedUnderlyingAdditionalTermBondIssuer');
var UnderlyingAdditionalTermBondSeniority = require('../fields/UnderlyingAdditionalTermBondSeniority');
var UnderlyingAdditionalTermBondCouponType = require('../fields/UnderlyingAdditionalTermBondCouponType');
var UnderlyingAdditionalTermBondCouponRate = require('../fields/UnderlyingAdditionalTermBondCouponRate');
var UnderlyingAdditionalTermBondMaturityDate = require('../fields/UnderlyingAdditionalTermBondMaturityDate');
var UnderlyingAdditionalTermBondParValue = require('../fields/UnderlyingAdditionalTermBondParValue');
var UnderlyingAdditionalTermBondCurrentTotalIssuedAmount = require('../fields/UnderlyingAdditionalTermBondCurrentTotalIssuedAmount');
var UnderlyingAdditionalTermBondCouponFrequencyPeriod = require('../fields/UnderlyingAdditionalTermBondCouponFrequencyPeriod');
var UnderlyingAdditionalTermBondCouponFrequencyUnit = require('../fields/UnderlyingAdditionalTermBondCouponFrequencyUnit');
var UnderlyingAdditionalTermBondDayCount = require('../fields/UnderlyingAdditionalTermBondDayCount');

function UnderlyingAdditionalTermBondRefGrp (underlyingAdditionalTermBondRefGrp) {
  this.message = underlyingAdditionalTermBondRefGrp;
}

/* group */

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.underlyingAdditionalTermBondSecurityId = function () {
  return new UnderlyingAdditionalTermBondSecurityID(this.message.tags[UnderlyingAdditionalTermBondSecurityID.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.underlyingAdditionalTermBondSecurityIdsource = function () {
  return new UnderlyingAdditionalTermBondSecurityIDSource(this.message.tags[UnderlyingAdditionalTermBondSecurityIDSource.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.underlyingAdditionalTermBondDesc = function () {
  return new UnderlyingAdditionalTermBondDesc(this.message.tags[UnderlyingAdditionalTermBondDesc.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.encodedUnderlyingAdditionalTermBondDescLen = function () {
  return new EncodedUnderlyingAdditionalTermBondDescLen(this.message.tags[EncodedUnderlyingAdditionalTermBondDescLen.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.encodedUnderlyingAdditionalTermBondDesc = function () {
  return new EncodedUnderlyingAdditionalTermBondDesc(this.message.tags[EncodedUnderlyingAdditionalTermBondDesc.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.underlyingAdditionalTermBondCurrency = function () {
  return new UnderlyingAdditionalTermBondCurrency(this.message.tags[UnderlyingAdditionalTermBondCurrency.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.underlyingAdditionalTermBondIssuer = function () {
  return new UnderlyingAdditionalTermBondIssuer(this.message.tags[UnderlyingAdditionalTermBondIssuer.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.encodedUnderlyingAdditionalTermBondIssuerLen = function () {
  return new EncodedUnderlyingAdditionalTermBondIssuerLen(this.message.tags[EncodedUnderlyingAdditionalTermBondIssuerLen.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.encodedUnderlyingAdditionalTermBondIssuer = function () {
  return new EncodedUnderlyingAdditionalTermBondIssuer(this.message.tags[EncodedUnderlyingAdditionalTermBondIssuer.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.underlyingAdditionalTermBondSeniority = function () {
  return new UnderlyingAdditionalTermBondSeniority(this.message.tags[UnderlyingAdditionalTermBondSeniority.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.underlyingAdditionalTermBondCouponType = function () {
  return new UnderlyingAdditionalTermBondCouponType(this.message.tags[UnderlyingAdditionalTermBondCouponType.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.underlyingAdditionalTermBondCouponRate = function () {
  return new UnderlyingAdditionalTermBondCouponRate(this.message.tags[UnderlyingAdditionalTermBondCouponRate.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.underlyingAdditionalTermBondMaturityDate = function () {
  return new UnderlyingAdditionalTermBondMaturityDate(this.message.tags[UnderlyingAdditionalTermBondMaturityDate.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.underlyingAdditionalTermBondParValue = function () {
  return new UnderlyingAdditionalTermBondParValue(this.message.tags[UnderlyingAdditionalTermBondParValue.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.underlyingAdditionalTermBondCurrentTotalIssuedAmount = function () {
  return new UnderlyingAdditionalTermBondCurrentTotalIssuedAmount(this.message.tags[UnderlyingAdditionalTermBondCurrentTotalIssuedAmount.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.underlyingAdditionalTermBondCouponFrequencyPeriod = function () {
  return new UnderlyingAdditionalTermBondCouponFrequencyPeriod(this.message.tags[UnderlyingAdditionalTermBondCouponFrequencyPeriod.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.underlyingAdditionalTermBondCouponFrequencyUnit = function () {
  return new UnderlyingAdditionalTermBondCouponFrequencyUnit(this.message.tags[UnderlyingAdditionalTermBondCouponFrequencyUnit.Tag]);
};

/* field */
UnderlyingAdditionalTermBondRefGrp.prototype.underlyingAdditionalTermBondDayCount = function () {
  return new UnderlyingAdditionalTermBondDayCount(this.message.tags[UnderlyingAdditionalTermBondDayCount.Tag]);
};

/* end group */

UnderlyingAdditionalTermBondRefGrp.Tag = '41340';

module.exports = UnderlyingAdditionalTermBondRefGrp;