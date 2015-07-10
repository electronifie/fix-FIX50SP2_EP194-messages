var NoProtectionTerms = require('../fields/NoProtectionTerms');
var ProtectionTermEventNewsSourceGrp = require('../components/ProtectionTermEventNewsSourceGrp');
var ProtectionTermEventGrp = require('../components/ProtectionTermEventGrp');
var ProtectionTermObligationGrp = require('../components/ProtectionTermObligationGrp');
var ProtectionTermNotional = require('../fields/ProtectionTermNotional');
var ProtectionTermCurrency = require('../fields/ProtectionTermCurrency');
var ProtectionTermSellerNotifies = require('../fields/ProtectionTermSellerNotifies');
var ProtectionTermBuyerNotifies = require('../fields/ProtectionTermBuyerNotifies');
var ProtectionTermEventBusinessCenter = require('../fields/ProtectionTermEventBusinessCenter');
var ProtectionTermStandardSources = require('../fields/ProtectionTermStandardSources');
var ProtectionTermEventMinimumSources = require('../fields/ProtectionTermEventMinimumSources');
var ProtectionTermXID = require('../fields/ProtectionTermXID');

function ProtectionTermGrp (protectionTermGrp) {
  this.message = protectionTermGrp;
}

/* group */

/* component */
ProtectionTermGrp.prototype.protectionTermEventNewsSourceGrp = function () {
  return this.message.groups[ProtectionTermEventNewsSourceGrp.Tag]
    .map(function (protectionTermEventNewsSourceGrp) {
      return new ProtectionTermEventNewsSourceGrp(protectionTermEventNewsSourceGrp);
  });
};

/* component */
ProtectionTermGrp.prototype.protectionTermEventGrp = function () {
  return this.message.groups[ProtectionTermEventGrp.Tag]
    .map(function (protectionTermEventGrp) {
      return new ProtectionTermEventGrp(protectionTermEventGrp);
  });
};

/* component */
ProtectionTermGrp.prototype.protectionTermObligationGrp = function () {
  return this.message.groups[ProtectionTermObligationGrp.Tag]
    .map(function (protectionTermObligationGrp) {
      return new ProtectionTermObligationGrp(protectionTermObligationGrp);
  });
};

/* field */
ProtectionTermGrp.prototype.protectionTermNotional = function () {
  return new ProtectionTermNotional(this.message.tags[ProtectionTermNotional.Tag]);
};

/* field */
ProtectionTermGrp.prototype.protectionTermCurrency = function () {
  return new ProtectionTermCurrency(this.message.tags[ProtectionTermCurrency.Tag]);
};

/* field */
ProtectionTermGrp.prototype.protectionTermSellerNotifies = function () {
  return new ProtectionTermSellerNotifies(this.message.tags[ProtectionTermSellerNotifies.Tag]);
};

/* field */
ProtectionTermGrp.prototype.protectionTermBuyerNotifies = function () {
  return new ProtectionTermBuyerNotifies(this.message.tags[ProtectionTermBuyerNotifies.Tag]);
};

/* field */
ProtectionTermGrp.prototype.protectionTermEventBusinessCenter = function () {
  return new ProtectionTermEventBusinessCenter(this.message.tags[ProtectionTermEventBusinessCenter.Tag]);
};

/* field */
ProtectionTermGrp.prototype.protectionTermStandardSources = function () {
  return new ProtectionTermStandardSources(this.message.tags[ProtectionTermStandardSources.Tag]);
};

/* field */
ProtectionTermGrp.prototype.protectionTermEventMinimumSources = function () {
  return new ProtectionTermEventMinimumSources(this.message.tags[ProtectionTermEventMinimumSources.Tag]);
};

/* field */
ProtectionTermGrp.prototype.protectionTermXid = function () {
  return new ProtectionTermXID(this.message.tags[ProtectionTermXID.Tag]);
};

/* end group */

ProtectionTermGrp.Tag = '40181';

module.exports = ProtectionTermGrp;