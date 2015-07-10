var NoPosAmt = require('../fields/NoPosAmt');
var PosAmtType = require('../fields/PosAmtType');
var PosAmt = require('../fields/PosAmt');
var PosAmtStreamDesc = require('../fields/PosAmtStreamDesc');
var PositionCurrency = require('../fields/PositionCurrency');
var PositionFXRate = require('../fields/PositionFXRate');
var PositionFXRateCalc = require('../fields/PositionFXRateCalc');
var PosAmtReason = require('../fields/PosAmtReason');
var PosAmtMarketSegmentID = require('../fields/PosAmtMarketSegmentID');
var PosAmtMarketID = require('../fields/PosAmtMarketID');

function PositionAmountData (positionAmountData) {
  this.message = positionAmountData;
}

/* group */

/* field */
PositionAmountData.prototype.posAmtType = function () {
  return new PosAmtType(this.message.tags[PosAmtType.Tag]);
};

/* field */
PositionAmountData.prototype.posAmt = function () {
  return new PosAmt(this.message.tags[PosAmt.Tag]);
};

/* field */
PositionAmountData.prototype.posAmtStreamDesc = function () {
  return new PosAmtStreamDesc(this.message.tags[PosAmtStreamDesc.Tag]);
};

/* field */
PositionAmountData.prototype.positionCurrency = function () {
  return new PositionCurrency(this.message.tags[PositionCurrency.Tag]);
};

/* field */
PositionAmountData.prototype.positionFxrate = function () {
  return new PositionFXRate(this.message.tags[PositionFXRate.Tag]);
};

/* field */
PositionAmountData.prototype.positionFxrateCalc = function () {
  return new PositionFXRateCalc(this.message.tags[PositionFXRateCalc.Tag]);
};

/* field */
PositionAmountData.prototype.posAmtReason = function () {
  return new PosAmtReason(this.message.tags[PosAmtReason.Tag]);
};

/* field */
PositionAmountData.prototype.posAmtMarketSegmentId = function () {
  return new PosAmtMarketSegmentID(this.message.tags[PosAmtMarketSegmentID.Tag]);
};

/* field */
PositionAmountData.prototype.posAmtMarketId = function () {
  return new PosAmtMarketID(this.message.tags[PosAmtMarketID.Tag]);
};

/* end group */

PositionAmountData.Tag = '753';

module.exports = PositionAmountData;