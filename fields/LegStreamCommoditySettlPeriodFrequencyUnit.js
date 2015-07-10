var invert = require('invert-obj');

function LegStreamCommoditySettlPeriodFrequencyUnit (legStreamCommoditySettlPeriodFrequencyUnit) {
  this.message = legStreamCommoditySettlPeriodFrequencyUnit;
}

LegStreamCommoditySettlPeriodFrequencyUnit.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlPeriodFrequencyUnit.Tag = '41693';

LegStreamCommoditySettlPeriodFrequencyUnit.Type = 'STRING';

module.exports = LegStreamCommoditySettlPeriodFrequencyUnit;