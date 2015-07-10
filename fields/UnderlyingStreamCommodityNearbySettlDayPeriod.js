var invert = require('invert-obj');

function UnderlyingStreamCommodityNearbySettlDayPeriod (underlyingStreamCommodityNearbySettlDayPeriod) {
  this.message = underlyingStreamCommodityNearbySettlDayPeriod;
}

UnderlyingStreamCommodityNearbySettlDayPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityNearbySettlDayPeriod.Tag = '41979';

UnderlyingStreamCommodityNearbySettlDayPeriod.Type = 'INT';

module.exports = UnderlyingStreamCommodityNearbySettlDayPeriod;