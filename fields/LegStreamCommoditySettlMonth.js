var invert = require('invert-obj');

function LegStreamCommoditySettlMonth (legStreamCommoditySettlMonth) {
  this.message = legStreamCommoditySettlMonth;
}

LegStreamCommoditySettlMonth.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlMonth.Tag = '41668';

LegStreamCommoditySettlMonth.Type = 'INT';

module.exports = LegStreamCommoditySettlMonth;