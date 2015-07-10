var NoUnderlyingProtectionTerms = require('../fields/NoUnderlyingProtectionTerms');
var UnderlyingProtectionTermEventNewsSourceGrp = require('../components/UnderlyingProtectionTermEventNewsSourceGrp');
var UnderlyingProtectionTermEventGrp = require('../components/UnderlyingProtectionTermEventGrp');
var UnderlyingProtectionTermObligationGrp = require('../components/UnderlyingProtectionTermObligationGrp');
var UnderlyingProtectionTermNotional = require('../fields/UnderlyingProtectionTermNotional');
var UnderlyingProtectionTermCurrency = require('../fields/UnderlyingProtectionTermCurrency');
var UnderlyingProtectionTermSellerNotifies = require('../fields/UnderlyingProtectionTermSellerNotifies');
var UnderlyingProtectionTermBuyerNotifies = require('../fields/UnderlyingProtectionTermBuyerNotifies');
var UnderlyingProtectionTermEventBusinessCenter = require('../fields/UnderlyingProtectionTermEventBusinessCenter');
var UnderlyingProtectionTermStandardSources = require('../fields/UnderlyingProtectionTermStandardSources');
var UnderlyingProtectionTermEventMinimumSources = require('../fields/UnderlyingProtectionTermEventMinimumSources');
var UnderlyingProtectionTermXID = require('../fields/UnderlyingProtectionTermXID');

function UnderlyingProtectionTermGrp (underlyingProtectionTermGrp) {
  this.message = underlyingProtectionTermGrp;
}

/* group */

/* component */
UnderlyingProtectionTermGrp.prototype.underlyingProtectionTermEventNewsSourceGrp = function () {
  return this.message.groups[UnderlyingProtectionTermEventNewsSourceGrp.Tag]
    .map(function (underlyingProtectionTermEventNewsSourceGrp) {
      return new UnderlyingProtectionTermEventNewsSourceGrp(underlyingProtectionTermEventNewsSourceGrp);
  });
};

/* component */
UnderlyingProtectionTermGrp.prototype.underlyingProtectionTermEventGrp = function () {
  return this.message.groups[UnderlyingProtectionTermEventGrp.Tag]
    .map(function (underlyingProtectionTermEventGrp) {
      return new UnderlyingProtectionTermEventGrp(underlyingProtectionTermEventGrp);
  });
};

/* component */
UnderlyingProtectionTermGrp.prototype.underlyingProtectionTermObligationGrp = function () {
  return this.message.groups[UnderlyingProtectionTermObligationGrp.Tag]
    .map(function (underlyingProtectionTermObligationGrp) {
      return new UnderlyingProtectionTermObligationGrp(underlyingProtectionTermObligationGrp);
  });
};

/* field */
UnderlyingProtectionTermGrp.prototype.underlyingProtectionTermNotional = function () {
  return new UnderlyingProtectionTermNotional(this.message.tags[UnderlyingProtectionTermNotional.Tag]);
};

/* field */
UnderlyingProtectionTermGrp.prototype.underlyingProtectionTermCurrency = function () {
  return new UnderlyingProtectionTermCurrency(this.message.tags[UnderlyingProtectionTermCurrency.Tag]);
};

/* field */
UnderlyingProtectionTermGrp.prototype.underlyingProtectionTermSellerNotifies = function () {
  return new UnderlyingProtectionTermSellerNotifies(this.message.tags[UnderlyingProtectionTermSellerNotifies.Tag]);
};

/* field */
UnderlyingProtectionTermGrp.prototype.underlyingProtectionTermBuyerNotifies = function () {
  return new UnderlyingProtectionTermBuyerNotifies(this.message.tags[UnderlyingProtectionTermBuyerNotifies.Tag]);
};

/* field */
UnderlyingProtectionTermGrp.prototype.underlyingProtectionTermEventBusinessCenter = function () {
  return new UnderlyingProtectionTermEventBusinessCenter(this.message.tags[UnderlyingProtectionTermEventBusinessCenter.Tag]);
};

/* field */
UnderlyingProtectionTermGrp.prototype.underlyingProtectionTermStandardSources = function () {
  return new UnderlyingProtectionTermStandardSources(this.message.tags[UnderlyingProtectionTermStandardSources.Tag]);
};

/* field */
UnderlyingProtectionTermGrp.prototype.underlyingProtectionTermEventMinimumSources = function () {
  return new UnderlyingProtectionTermEventMinimumSources(this.message.tags[UnderlyingProtectionTermEventMinimumSources.Tag]);
};

/* field */
UnderlyingProtectionTermGrp.prototype.underlyingProtectionTermXid = function () {
  return new UnderlyingProtectionTermXID(this.message.tags[UnderlyingProtectionTermXID.Tag]);
};

/* end group */

UnderlyingProtectionTermGrp.Tag = '42068';

module.exports = UnderlyingProtectionTermGrp;