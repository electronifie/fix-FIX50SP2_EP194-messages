var invert = require('invert-obj');

function LegStreamCommoditySettlPeriodFrequencyPeriod (legStreamCommoditySettlPeriodFrequencyPeriod) {
  this.message = legStreamCommoditySettlPeriodFrequencyPeriod;
}

LegStreamCommoditySettlPeriodFrequencyPeriod.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlPeriodFrequencyPeriod.Tag = '41692';

LegStreamCommoditySettlPeriodFrequencyPeriod.Type = 'INT';

module.exports = LegStreamCommoditySettlPeriodFrequencyPeriod;