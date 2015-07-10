var NoLegStreamCommoditySettlDays = require('../fields/NoLegStreamCommoditySettlDays');
var LegStreamCommoditySettlTimeGrp = require('../components/LegStreamCommoditySettlTimeGrp');
var LegStreamCommoditySettlDay = require('../fields/LegStreamCommoditySettlDay');
var LegStreamCommoditySettlTotalHours = require('../fields/LegStreamCommoditySettlTotalHours');

function LegStreamCommoditySettlDayGrp (legStreamCommoditySettlDayGrp) {
  this.message = legStreamCommoditySettlDayGrp;
}

/* group */

/* component */
LegStreamCommoditySettlDayGrp.prototype.legStreamCommoditySettlTimeGrp = function () {
  return this.message.groups[LegStreamCommoditySettlTimeGrp.Tag]
    .map(function (legStreamCommoditySettlTimeGrp) {
      return new LegStreamCommoditySettlTimeGrp(legStreamCommoditySettlTimeGrp);
  });
};

/* field */
LegStreamCommoditySettlDayGrp.prototype.legStreamCommoditySettlDay = function () {
  return new LegStreamCommoditySettlDay(this.message.tags[LegStreamCommoditySettlDay.Tag]);
};

/* field */
LegStreamCommoditySettlDayGrp.prototype.legStreamCommoditySettlTotalHours = function () {
  return new LegStreamCommoditySettlTotalHours(this.message.tags[LegStreamCommoditySettlTotalHours.Tag]);
};

/* end group */

LegStreamCommoditySettlDayGrp.Tag = '41680';

module.exports = LegStreamCommoditySettlDayGrp;