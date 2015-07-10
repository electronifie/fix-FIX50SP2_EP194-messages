var invert = require('invert-obj');

function StreamCommoditySettlDayType (streamCommoditySettlDayType) {
  this.message = streamCommoditySettlDayType;
}

StreamCommoditySettlDayType.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlDayType.Tag = '41274';

StreamCommoditySettlDayType.Type = 'STRING';

module.exports = StreamCommoditySettlDayType;