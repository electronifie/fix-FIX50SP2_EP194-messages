var NoStreamCommoditySettlDays = require('../fields/NoStreamCommoditySettlDays');
var StreamCommoditySettlTimeGrp = require('../components/StreamCommoditySettlTimeGrp');
var StreamCommoditySettlDay = require('../fields/StreamCommoditySettlDay');
var StreamCommoditySettlTotalHours = require('../fields/StreamCommoditySettlTotalHours');

function StreamCommoditySettlDayGrp (streamCommoditySettlDayGrp) {
  this.message = streamCommoditySettlDayGrp;
}

/* group */

/* component */
StreamCommoditySettlDayGrp.prototype.streamCommoditySettlTimeGrp = function () {
  return this.message.groups[StreamCommoditySettlTimeGrp.Tag]
    .map(function (streamCommoditySettlTimeGrp) {
      return new StreamCommoditySettlTimeGrp(streamCommoditySettlTimeGrp);
  });
};

/* field */
StreamCommoditySettlDayGrp.prototype.streamCommoditySettlDay = function () {
  return new StreamCommoditySettlDay(this.message.tags[StreamCommoditySettlDay.Tag]);
};

/* field */
StreamCommoditySettlDayGrp.prototype.streamCommoditySettlTotalHours = function () {
  return new StreamCommoditySettlTotalHours(this.message.tags[StreamCommoditySettlTotalHours.Tag]);
};

/* end group */

StreamCommoditySettlDayGrp.Tag = '41283';

module.exports = StreamCommoditySettlDayGrp;