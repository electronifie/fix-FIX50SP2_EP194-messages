var NoLegProtectionTerms = require('../fields/NoLegProtectionTerms');
var LegProtectionTermEventNewsSourceGrp = require('../components/LegProtectionTermEventNewsSourceGrp');
var LegProtectionTermEventGrp = require('../components/LegProtectionTermEventGrp');
var LegProtectionTermObligationGrp = require('../components/LegProtectionTermObligationGrp');
var LegProtectionTermNotional = require('../fields/LegProtectionTermNotional');
var LegProtectionTermCurrency = require('../fields/LegProtectionTermCurrency');
var LegProtectionTermSellerNotifies = require('../fields/LegProtectionTermSellerNotifies');
var LegProtectionTermBuyerNotifies = require('../fields/LegProtectionTermBuyerNotifies');
var LegProtectionTermEventBusinessCenter = require('../fields/LegProtectionTermEventBusinessCenter');
var LegProtectionTermStandardSources = require('../fields/LegProtectionTermStandardSources');
var LegProtectionTermEventMinimumSources = require('../fields/LegProtectionTermEventMinimumSources');
var LegProtectionTermXID = require('../fields/LegProtectionTermXID');

function LegProtectionTermGrp (legProtectionTermGrp) {
  this.message = legProtectionTermGrp;
}

/* group */

/* component */
LegProtectionTermGrp.prototype.legProtectionTermEventNewsSourceGrp = function () {
  return this.message.groups[LegProtectionTermEventNewsSourceGrp.Tag]
    .map(function (legProtectionTermEventNewsSourceGrp) {
      return new LegProtectionTermEventNewsSourceGrp(legProtectionTermEventNewsSourceGrp);
  });
};

/* component */
LegProtectionTermGrp.prototype.legProtectionTermEventGrp = function () {
  return this.message.groups[LegProtectionTermEventGrp.Tag]
    .map(function (legProtectionTermEventGrp) {
      return new LegProtectionTermEventGrp(legProtectionTermEventGrp);
  });
};

/* component */
LegProtectionTermGrp.prototype.legProtectionTermObligationGrp = function () {
  return this.message.groups[LegProtectionTermObligationGrp.Tag]
    .map(function (legProtectionTermObligationGrp) {
      return new LegProtectionTermObligationGrp(legProtectionTermObligationGrp);
  });
};

/* field */
LegProtectionTermGrp.prototype.legProtectionTermNotional = function () {
  return new LegProtectionTermNotional(this.message.tags[LegProtectionTermNotional.Tag]);
};

/* field */
LegProtectionTermGrp.prototype.legProtectionTermCurrency = function () {
  return new LegProtectionTermCurrency(this.message.tags[LegProtectionTermCurrency.Tag]);
};

/* field */
LegProtectionTermGrp.prototype.legProtectionTermSellerNotifies = function () {
  return new LegProtectionTermSellerNotifies(this.message.tags[LegProtectionTermSellerNotifies.Tag]);
};

/* field */
LegProtectionTermGrp.prototype.legProtectionTermBuyerNotifies = function () {
  return new LegProtectionTermBuyerNotifies(this.message.tags[LegProtectionTermBuyerNotifies.Tag]);
};

/* field */
LegProtectionTermGrp.prototype.legProtectionTermEventBusinessCenter = function () {
  return new LegProtectionTermEventBusinessCenter(this.message.tags[LegProtectionTermEventBusinessCenter.Tag]);
};

/* field */
LegProtectionTermGrp.prototype.legProtectionTermStandardSources = function () {
  return new LegProtectionTermStandardSources(this.message.tags[LegProtectionTermStandardSources.Tag]);
};

/* field */
LegProtectionTermGrp.prototype.legProtectionTermEventMinimumSources = function () {
  return new LegProtectionTermEventMinimumSources(this.message.tags[LegProtectionTermEventMinimumSources.Tag]);
};

/* field */
LegProtectionTermGrp.prototype.legProtectionTermXid = function () {
  return new LegProtectionTermXID(this.message.tags[LegProtectionTermXID.Tag]);
};

/* end group */

LegProtectionTermGrp.Tag = '41616';

module.exports = LegProtectionTermGrp;