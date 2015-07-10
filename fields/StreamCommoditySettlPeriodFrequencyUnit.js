var invert = require('invert-obj');

function StreamCommoditySettlPeriodFrequencyUnit (streamCommoditySettlPeriodFrequencyUnit) {
  this.message = streamCommoditySettlPeriodFrequencyUnit;
}

StreamCommoditySettlPeriodFrequencyUnit.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlPeriodFrequencyUnit.Tag = '41296';

StreamCommoditySettlPeriodFrequencyUnit.Type = 'STRING';

module.exports = StreamCommoditySettlPeriodFrequencyUnit;