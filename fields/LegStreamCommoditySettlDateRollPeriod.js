var invert = require('invert-obj');

function LegStreamCommoditySettlDateRollPeriod (legStreamCommoditySettlDateRollPeriod) {
  this.message = legStreamCommoditySettlDateRollPeriod;
}

LegStreamCommoditySettlDateRollPeriod.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlDateRollPeriod.Tag = '41669';

LegStreamCommoditySettlDateRollPeriod.Type = 'INT';

module.exports = LegStreamCommoditySettlDateRollPeriod;