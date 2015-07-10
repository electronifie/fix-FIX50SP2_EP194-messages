var NoMarginAmt = require('../fields/NoMarginAmt');
var MarginAmt = require('../fields/MarginAmt');
var MarginAmtType = require('../fields/MarginAmtType');
var MarginAmtCcy = require('../fields/MarginAmtCcy');
var MarginAmtFXRate = require('../fields/MarginAmtFXRate');
var MarginAmtFXRateCalc = require('../fields/MarginAmtFXRateCalc');
var MarginAmountMarketSegmentID = require('../fields/MarginAmountMarketSegmentID');
var MarginAmountMarketID = require('../fields/MarginAmountMarketID');

function MarginAmount (marginAmount) {
  this.message = marginAmount;
}

/* group */

/* field */
MarginAmount.prototype.marginAmt = function () {
  return new MarginAmt(this.message.tags[MarginAmt.Tag]);
};

/* field */
MarginAmount.prototype.marginAmtType = function () {
  return new MarginAmtType(this.message.tags[MarginAmtType.Tag]);
};

/* field */
MarginAmount.prototype.marginAmtCcy = function () {
  return new MarginAmtCcy(this.message.tags[MarginAmtCcy.Tag]);
};

/* field */
MarginAmount.prototype.marginAmtFxrate = function () {
  return new MarginAmtFXRate(this.message.tags[MarginAmtFXRate.Tag]);
};

/* field */
MarginAmount.prototype.marginAmtFxrateCalc = function () {
  return new MarginAmtFXRateCalc(this.message.tags[MarginAmtFXRateCalc.Tag]);
};

/* field */
MarginAmount.prototype.marginAmountMarketSegmentId = function () {
  return new MarginAmountMarketSegmentID(this.message.tags[MarginAmountMarketSegmentID.Tag]);
};

/* field */
MarginAmount.prototype.marginAmountMarketId = function () {
  return new MarginAmountMarketID(this.message.tags[MarginAmountMarketID.Tag]);
};

/* end group */

MarginAmount.Tag = '1643';

module.exports = MarginAmount;