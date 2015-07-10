var invert = require('invert-obj');

function LegStreamCommoditySettlTimeType (legStreamCommoditySettlTimeType) {
  this.message = legStreamCommoditySettlTimeType;
}

LegStreamCommoditySettlTimeType.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlTimeType.Tag = '41935';

LegStreamCommoditySettlTimeType.Type = 'INT';

module.exports = LegStreamCommoditySettlTimeType;