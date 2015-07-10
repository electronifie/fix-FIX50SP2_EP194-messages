var invert = require('invert-obj');

function LegStreamCommoditySettlHolidaysProcessingInstruction (legStreamCommoditySettlHolidaysProcessingInstruction) {
  this.message = legStreamCommoditySettlHolidaysProcessingInstruction;
}

LegStreamCommoditySettlHolidaysProcessingInstruction.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlHolidaysProcessingInstruction.Tag = '41697';

LegStreamCommoditySettlHolidaysProcessingInstruction.Type = 'INT';

module.exports = LegStreamCommoditySettlHolidaysProcessingInstruction;