var NoLegPosAmt = require('../fields/NoLegPosAmt');
var LegPosAmt = require('../fields/LegPosAmt');
var LegPosAmtType = require('../fields/LegPosAmtType');
var LegPosCurrency = require('../fields/LegPosCurrency');
var LegPosAmtReason = require('../fields/LegPosAmtReason');

function LegPositionAmountData (legPositionAmountData) {
  this.message = legPositionAmountData;
}

/* group */

/* field */
LegPositionAmountData.prototype.legPosAmt = function () {
  return new LegPosAmt(this.message.tags[LegPosAmt.Tag]);
};

/* field */
LegPositionAmountData.prototype.legPosAmtType = function () {
  return new LegPosAmtType(this.message.tags[LegPosAmtType.Tag]);
};

/* field */
LegPositionAmountData.prototype.legPosCurrency = function () {
  return new LegPosCurrency(this.message.tags[LegPosCurrency.Tag]);
};

/* field */
LegPositionAmountData.prototype.legPosAmtReason = function () {
  return new LegPosAmtReason(this.message.tags[LegPosAmtReason.Tag]);
};

/* end group */

LegPositionAmountData.Tag = '1586';

module.exports = LegPositionAmountData;