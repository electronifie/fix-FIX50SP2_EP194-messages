var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlPeriodFrequencyPeriod (underlyingStreamCommoditySettlPeriodFrequencyPeriod) {
  this.message = underlyingStreamCommoditySettlPeriodFrequencyPeriod;
}

UnderlyingStreamCommoditySettlPeriodFrequencyPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlPeriodFrequencyPeriod.Tag = '42008';

UnderlyingStreamCommoditySettlPeriodFrequencyPeriod.Type = 'INT';

module.exports = UnderlyingStreamCommoditySettlPeriodFrequencyPeriod;