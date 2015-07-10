var invert = require('invert-obj');

function LegStreamCommoditySettlTotalHours (legStreamCommoditySettlTotalHours) {
  this.message = legStreamCommoditySettlTotalHours;
}

LegStreamCommoditySettlTotalHours.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlTotalHours.Tag = '41682';

LegStreamCommoditySettlTotalHours.Type = 'INT';

module.exports = LegStreamCommoditySettlTotalHours;