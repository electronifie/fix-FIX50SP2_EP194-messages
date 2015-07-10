var NoUnderlyingStreamCommoditySettlTimes = require('../fields/NoUnderlyingStreamCommoditySettlTimes');
var UnderlyingStreamCommoditySettlStart = require('../fields/UnderlyingStreamCommoditySettlStart');
var UnderlyingStreamCommoditySettlEnd = require('../fields/UnderlyingStreamCommoditySettlEnd');
var UnderlyingStreamCommoditySettlTimeType = require('../fields/UnderlyingStreamCommoditySettlTimeType');

function UnderlyingStreamCommoditySettlTimeGrp (underlyingStreamCommoditySettlTimeGrp) {
  this.message = underlyingStreamCommoditySettlTimeGrp;
}

/* group */

/* field */
UnderlyingStreamCommoditySettlTimeGrp.prototype.underlyingStreamCommoditySettlStart = function () {
  return new UnderlyingStreamCommoditySettlStart(this.message.tags[UnderlyingStreamCommoditySettlStart.Tag]);
};

/* field */
UnderlyingStreamCommoditySettlTimeGrp.prototype.underlyingStreamCommoditySettlEnd = function () {
  return new UnderlyingStreamCommoditySettlEnd(this.message.tags[UnderlyingStreamCommoditySettlEnd.Tag]);
};

/* field */
UnderlyingStreamCommoditySettlTimeGrp.prototype.underlyingStreamCommoditySettlTimeType = function () {
  return new UnderlyingStreamCommoditySettlTimeType(this.message.tags[UnderlyingStreamCommoditySettlTimeType.Tag]);
};

/* end group */

UnderlyingStreamCommoditySettlTimeGrp.Tag = '41999';

module.exports = UnderlyingStreamCommoditySettlTimeGrp;