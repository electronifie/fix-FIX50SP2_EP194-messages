var invert = require('invert-obj');

function StreamCommoditySettlHolidaysProcessingInstruction (streamCommoditySettlHolidaysProcessingInstruction) {
  this.message = streamCommoditySettlHolidaysProcessingInstruction;
}

StreamCommoditySettlHolidaysProcessingInstruction.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlHolidaysProcessingInstruction.Tag = '41300';

StreamCommoditySettlHolidaysProcessingInstruction.Type = 'INT';

module.exports = StreamCommoditySettlHolidaysProcessingInstruction;