var invert = require('invert-obj');

function StreamCommodityNearbySettlDayUnit (streamCommodityNearbySettlDayUnit) {
  this.message = streamCommodityNearbySettlDayUnit;
}

StreamCommodityNearbySettlDayUnit.prototype.value = function () {
  return this.message;
};


StreamCommodityNearbySettlDayUnit.Keys = {
  WEEK: 'Wk',
  MONTH: 'Mo',
};

StreamCommodityNearbySettlDayUnit.Tag = '41267';

StreamCommodityNearbySettlDayUnit.Type = 'STRING';

StreamCommodityNearbySettlDayUnit.Values = invert(StreamCommodityNearbySettlDayUnit.Keys);

module.exports = StreamCommodityNearbySettlDayUnit;