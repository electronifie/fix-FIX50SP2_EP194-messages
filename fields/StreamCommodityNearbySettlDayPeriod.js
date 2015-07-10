var invert = require('invert-obj');

function StreamCommodityNearbySettlDayPeriod (streamCommodityNearbySettlDayPeriod) {
  this.message = streamCommodityNearbySettlDayPeriod;
}

StreamCommodityNearbySettlDayPeriod.prototype.value = function () {
  return this.message;
};

StreamCommodityNearbySettlDayPeriod.Tag = '41266';

StreamCommodityNearbySettlDayPeriod.Type = 'INT';

module.exports = StreamCommodityNearbySettlDayPeriod;