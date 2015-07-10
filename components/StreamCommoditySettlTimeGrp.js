var NoStreamCommoditySettlTimes = require('../fields/NoStreamCommoditySettlTimes');
var StreamCommoditySettlStart = require('../fields/StreamCommoditySettlStart');
var StreamCommoditySettlEnd = require('../fields/StreamCommoditySettlEnd');
var StreamCommoditySettlTimeType = require('../fields/StreamCommoditySettlTimeType');

function StreamCommoditySettlTimeGrp (streamCommoditySettlTimeGrp) {
  this.message = streamCommoditySettlTimeGrp;
}

/* group */

/* field */
StreamCommoditySettlTimeGrp.prototype.streamCommoditySettlStart = function () {
  return new StreamCommoditySettlStart(this.message.tags[StreamCommoditySettlStart.Tag]);
};

/* field */
StreamCommoditySettlTimeGrp.prototype.streamCommoditySettlEnd = function () {
  return new StreamCommoditySettlEnd(this.message.tags[StreamCommoditySettlEnd.Tag]);
};

/* field */
StreamCommoditySettlTimeGrp.prototype.streamCommoditySettlTimeType = function () {
  return new StreamCommoditySettlTimeType(this.message.tags[StreamCommoditySettlTimeType.Tag]);
};

/* end group */

StreamCommoditySettlTimeGrp.Tag = '41286';

module.exports = StreamCommoditySettlTimeGrp;