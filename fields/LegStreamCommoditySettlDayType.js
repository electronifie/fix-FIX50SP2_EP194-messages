var invert = require('invert-obj');

function LegStreamCommoditySettlDayType (legStreamCommoditySettlDayType) {
  this.message = legStreamCommoditySettlDayType;
}

LegStreamCommoditySettlDayType.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlDayType.Tag = '41671';

LegStreamCommoditySettlDayType.Type = 'INT';

module.exports = LegStreamCommoditySettlDayType;