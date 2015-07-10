var invert = require('invert-obj');

function StreamCommoditySettlPeriodFrequencyPeriod (streamCommoditySettlPeriodFrequencyPeriod) {
  this.message = streamCommoditySettlPeriodFrequencyPeriod;
}

StreamCommoditySettlPeriodFrequencyPeriod.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlPeriodFrequencyPeriod.Tag = '41295';

StreamCommoditySettlPeriodFrequencyPeriod.Type = 'INT';

module.exports = StreamCommoditySettlPeriodFrequencyPeriod;