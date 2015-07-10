var invert = require('invert-obj');

function StreamCommoditySettlDateRollPeriod (streamCommoditySettlDateRollPeriod) {
  this.message = streamCommoditySettlDateRollPeriod;
}

StreamCommoditySettlDateRollPeriod.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlDateRollPeriod.Tag = '41272';

StreamCommoditySettlDateRollPeriod.Type = 'INT';

module.exports = StreamCommoditySettlDateRollPeriod;