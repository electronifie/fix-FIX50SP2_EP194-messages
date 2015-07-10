var NoLegStreamCommoditySettlTimes = require('../fields/NoLegStreamCommoditySettlTimes');
var LegStreamCommoditySettlStart = require('../fields/LegStreamCommoditySettlStart');
var LegStreamCommoditySettlEnd = require('../fields/LegStreamCommoditySettlEnd');
var LegStreamCommoditySettlTimeType = require('../fields/LegStreamCommoditySettlTimeType');

function LegStreamCommoditySettlTimeGrp (legStreamCommoditySettlTimeGrp) {
  this.message = legStreamCommoditySettlTimeGrp;
}

/* group */

/* field */
LegStreamCommoditySettlTimeGrp.prototype.legStreamCommoditySettlStart = function () {
  return new LegStreamCommoditySettlStart(this.message.tags[LegStreamCommoditySettlStart.Tag]);
};

/* field */
LegStreamCommoditySettlTimeGrp.prototype.legStreamCommoditySettlEnd = function () {
  return new LegStreamCommoditySettlEnd(this.message.tags[LegStreamCommoditySettlEnd.Tag]);
};

/* field */
LegStreamCommoditySettlTimeGrp.prototype.legStreamCommoditySettlTimeType = function () {
  return new LegStreamCommoditySettlTimeType(this.message.tags[LegStreamCommoditySettlTimeType.Tag]);
};

/* end group */

LegStreamCommoditySettlTimeGrp.Tag = '41683';

module.exports = LegStreamCommoditySettlTimeGrp;