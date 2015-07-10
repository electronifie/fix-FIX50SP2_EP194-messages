var invert = require('invert-obj');

function StreamCommoditySettlDay (streamCommoditySettlDay) {
  this.message = streamCommoditySettlDay;
}

StreamCommoditySettlDay.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlDay.Tag = '41284';

StreamCommoditySettlDay.Type = 'INT';

module.exports = StreamCommoditySettlDay;