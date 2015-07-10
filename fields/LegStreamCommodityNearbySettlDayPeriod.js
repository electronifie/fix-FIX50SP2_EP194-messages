var invert = require('invert-obj');

function LegStreamCommodityNearbySettlDayPeriod (legStreamCommodityNearbySettlDayPeriod) {
  this.message = legStreamCommodityNearbySettlDayPeriod;
}

LegStreamCommodityNearbySettlDayPeriod.prototype.value = function () {
  return this.message;
};

LegStreamCommodityNearbySettlDayPeriod.Tag = '41663';

LegStreamCommodityNearbySettlDayPeriod.Type = 'INT';

module.exports = LegStreamCommodityNearbySettlDayPeriod;