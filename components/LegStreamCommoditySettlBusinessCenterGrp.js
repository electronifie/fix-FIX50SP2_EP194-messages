var NoLegStreamCommoditySettlBusinessCenters = require('../fields/NoLegStreamCommoditySettlBusinessCenters');
var LegStreamCommoditySettlBusinessCenter = require('../fields/LegStreamCommoditySettlBusinessCenter');

function LegStreamCommoditySettlBusinessCenterGrp (legStreamCommoditySettlBusinessCenterGrp) {
  this.message = legStreamCommoditySettlBusinessCenterGrp;
}

/* group */

/* field */
LegStreamCommoditySettlBusinessCenterGrp.prototype.legStreamCommoditySettlBusinessCenter = function () {
  return new LegStreamCommoditySettlBusinessCenter(this.message.tags[LegStreamCommoditySettlBusinessCenter.Tag]);
};

/* end group */

LegStreamCommoditySettlBusinessCenterGrp.Tag = '41646';

module.exports = LegStreamCommoditySettlBusinessCenterGrp;