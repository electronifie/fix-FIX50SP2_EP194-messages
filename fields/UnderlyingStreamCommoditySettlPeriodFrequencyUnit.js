var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlPeriodFrequencyUnit (underlyingStreamCommoditySettlPeriodFrequencyUnit) {
  this.message = underlyingStreamCommoditySettlPeriodFrequencyUnit;
}

UnderlyingStreamCommoditySettlPeriodFrequencyUnit.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlPeriodFrequencyUnit.Tag = '42009';

UnderlyingStreamCommoditySettlPeriodFrequencyUnit.Type = 'STRING';

module.exports = UnderlyingStreamCommoditySettlPeriodFrequencyUnit;