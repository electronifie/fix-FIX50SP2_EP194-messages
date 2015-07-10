var invert = require('invert-obj');

function StreamCommoditySettlDateBusinessDayConvention (streamCommoditySettlDateBusinessDayConvention) {
  this.message = streamCommoditySettlDateBusinessDayConvention;
}

StreamCommoditySettlDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlDateBusinessDayConvention.Tag = '41269';

StreamCommoditySettlDateBusinessDayConvention.Type = 'INT';

module.exports = StreamCommoditySettlDateBusinessDayConvention;