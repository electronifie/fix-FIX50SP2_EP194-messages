var invert = require('invert-obj');

function LegStreamCommoditySettlDateRollUnit (legStreamCommoditySettlDateRollUnit) {
  this.message = legStreamCommoditySettlDateRollUnit;
}

LegStreamCommoditySettlDateRollUnit.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlDateRollUnit.Tag = '41670';

LegStreamCommoditySettlDateRollUnit.Type = 'STRING';

module.exports = LegStreamCommoditySettlDateRollUnit;