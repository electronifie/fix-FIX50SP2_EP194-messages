var NoUnderlyingStreamCommoditySettlBusinessCenters = require('../fields/NoUnderlyingStreamCommoditySettlBusinessCenters');
var UnderlyingStreamCommoditySettlBusinessCenter = require('../fields/UnderlyingStreamCommoditySettlBusinessCenter');

function UnderlyingStreamCommoditySettlBusinessCenterGrp (underlyingStreamCommoditySettlBusinessCenterGrp) {
  this.message = underlyingStreamCommoditySettlBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingStreamCommoditySettlBusinessCenterGrp.prototype.underlyingStreamCommoditySettlBusinessCenter = function () {
  return new UnderlyingStreamCommoditySettlBusinessCenter(this.message.tags[UnderlyingStreamCommoditySettlBusinessCenter.Tag]);
};

/* end group */

UnderlyingStreamCommoditySettlBusinessCenterGrp.Tag = '41962';

module.exports = UnderlyingStreamCommoditySettlBusinessCenterGrp;