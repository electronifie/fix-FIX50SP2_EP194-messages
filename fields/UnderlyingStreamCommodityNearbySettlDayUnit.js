var invert = require('invert-obj');

function UnderlyingStreamCommodityNearbySettlDayUnit (underlyingStreamCommodityNearbySettlDayUnit) {
  this.message = underlyingStreamCommodityNearbySettlDayUnit;
}

UnderlyingStreamCommodityNearbySettlDayUnit.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityNearbySettlDayUnit.Tag = '41980';

UnderlyingStreamCommodityNearbySettlDayUnit.Type = 'STRING';

module.exports = UnderlyingStreamCommodityNearbySettlDayUnit;