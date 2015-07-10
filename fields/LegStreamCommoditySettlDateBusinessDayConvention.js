var invert = require('invert-obj');

function LegStreamCommoditySettlDateBusinessDayConvention (legStreamCommoditySettlDateBusinessDayConvention) {
  this.message = legStreamCommoditySettlDateBusinessDayConvention;
}

LegStreamCommoditySettlDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlDateBusinessDayConvention.Tag = '41666';

LegStreamCommoditySettlDateBusinessDayConvention.Type = 'INT';

module.exports = LegStreamCommoditySettlDateBusinessDayConvention;