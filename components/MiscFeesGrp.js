var NoMiscFees = require('../fields/NoMiscFees');
var MiscFeeAmt = require('../fields/MiscFeeAmt');
var MiscFeeCurr = require('../fields/MiscFeeCurr');
var MiscFeeType = require('../fields/MiscFeeType');
var MiscFeeBasis = require('../fields/MiscFeeBasis');
var MiscFeeRate = require('../fields/MiscFeeRate');
var MiscFeeAmountDue = require('../fields/MiscFeeAmountDue');

function MiscFeesGrp (miscFeesGrp) {
  this.message = miscFeesGrp;
}

/* group */

/* field */
MiscFeesGrp.prototype.miscFeeAmt = function () {
  return new MiscFeeAmt(this.message.tags[MiscFeeAmt.Tag]);
};

/* field */
MiscFeesGrp.prototype.miscFeeCurr = function () {
  return new MiscFeeCurr(this.message.tags[MiscFeeCurr.Tag]);
};

/* field */
MiscFeesGrp.prototype.miscFeeType = function () {
  return new MiscFeeType(this.message.tags[MiscFeeType.Tag]);
};

/* field */
MiscFeesGrp.prototype.miscFeeBasis = function () {
  return new MiscFeeBasis(this.message.tags[MiscFeeBasis.Tag]);
};

/* field */
MiscFeesGrp.prototype.miscFeeRate = function () {
  return new MiscFeeRate(this.message.tags[MiscFeeRate.Tag]);
};

/* field */
MiscFeesGrp.prototype.miscFeeAmountDue = function () {
  return new MiscFeeAmountDue(this.message.tags[MiscFeeAmountDue.Tag]);
};

/* end group */

MiscFeesGrp.Tag = '136';

module.exports = MiscFeesGrp;