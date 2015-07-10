var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlDateRollPeriod (underlyingStreamCommoditySettlDateRollPeriod) {
  this.message = underlyingStreamCommoditySettlDateRollPeriod;
}

UnderlyingStreamCommoditySettlDateRollPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlDateRollPeriod.Tag = '41985';

UnderlyingStreamCommoditySettlDateRollPeriod.Type = 'INT';

module.exports = UnderlyingStreamCommoditySettlDateRollPeriod;