var invert = require('invert-obj');

function StreamCommoditySettlTotalHours (streamCommoditySettlTotalHours) {
  this.message = streamCommoditySettlTotalHours;
}

StreamCommoditySettlTotalHours.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlTotalHours.Tag = '41285';

StreamCommoditySettlTotalHours.Type = 'INT';

module.exports = StreamCommoditySettlTotalHours;