var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlDayType (underlyingStreamCommoditySettlDayType) {
  this.message = underlyingStreamCommoditySettlDayType;
}

UnderlyingStreamCommoditySettlDayType.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlDayType.Tag = '41987';

UnderlyingStreamCommoditySettlDayType.Type = 'INT';

module.exports = UnderlyingStreamCommoditySettlDayType;