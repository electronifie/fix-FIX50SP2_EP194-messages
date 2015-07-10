var invert = require('invert-obj');

function LegStreamCommoditySettlDay (legStreamCommoditySettlDay) {
  this.message = legStreamCommoditySettlDay;
}

LegStreamCommoditySettlDay.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlDay.Tag = '41681';

LegStreamCommoditySettlDay.Type = 'INT';

module.exports = LegStreamCommoditySettlDay;