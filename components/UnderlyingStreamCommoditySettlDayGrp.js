var NoUnderlyingStreamCommoditySettlDays = require('../fields/NoUnderlyingStreamCommoditySettlDays');
var UnderlyingStreamCommoditySettlTimeGrp = require('../components/UnderlyingStreamCommoditySettlTimeGrp');
var UnderlyingStreamCommoditySettlDay = require('../fields/UnderlyingStreamCommoditySettlDay');
var UnderlyingStreamCommoditySettlTotalHours = require('../fields/UnderlyingStreamCommoditySettlTotalHours');

function UnderlyingStreamCommoditySettlDayGrp (underlyingStreamCommoditySettlDayGrp) {
  this.message = underlyingStreamCommoditySettlDayGrp;
}

/* group */

/* component */
UnderlyingStreamCommoditySettlDayGrp.prototype.underlyingStreamCommoditySettlTimeGrp = function () {
  return this.message.groups[UnderlyingStreamCommoditySettlTimeGrp.Tag]
    .map(function (underlyingStreamCommoditySettlTimeGrp) {
      return new UnderlyingStreamCommoditySettlTimeGrp(underlyingStreamCommoditySettlTimeGrp);
  });
};

/* field */
UnderlyingStreamCommoditySettlDayGrp.prototype.underlyingStreamCommoditySettlDay = function () {
  return new UnderlyingStreamCommoditySettlDay(this.message.tags[UnderlyingStreamCommoditySettlDay.Tag]);
};

/* field */
UnderlyingStreamCommoditySettlDayGrp.prototype.underlyingStreamCommoditySettlTotalHours = function () {
  return new UnderlyingStreamCommoditySettlTotalHours(this.message.tags[UnderlyingStreamCommoditySettlTotalHours.Tag]);
};

/* end group */

UnderlyingStreamCommoditySettlDayGrp.Tag = '41996';

module.exports = UnderlyingStreamCommoditySettlDayGrp;