var invert = require('invert-obj');

function LegStreamCommodityNearbySettlDayUnit (legStreamCommodityNearbySettlDayUnit) {
  this.message = legStreamCommodityNearbySettlDayUnit;
}

LegStreamCommodityNearbySettlDayUnit.prototype.value = function () {
  return this.message;
};

LegStreamCommodityNearbySettlDayUnit.Tag = '41664';

LegStreamCommodityNearbySettlDayUnit.Type = 'STRING';

module.exports = LegStreamCommodityNearbySettlDayUnit;