var NoStreamCommoditySettlBusinessCenters = require('../fields/NoStreamCommoditySettlBusinessCenters');
var StreamCommoditySettlBusinessCenter = require('../fields/StreamCommoditySettlBusinessCenter');

function StreamCommoditySettlBusinessCenterGrp (streamCommoditySettlBusinessCenterGrp) {
  this.message = streamCommoditySettlBusinessCenterGrp;
}

/* group */

/* field */
StreamCommoditySettlBusinessCenterGrp.prototype.streamCommoditySettlBusinessCenter = function () {
  return new StreamCommoditySettlBusinessCenter(this.message.tags[StreamCommoditySettlBusinessCenter.Tag]);
};

/* end group */

StreamCommoditySettlBusinessCenterGrp.Tag = '41249';

module.exports = StreamCommoditySettlBusinessCenterGrp;