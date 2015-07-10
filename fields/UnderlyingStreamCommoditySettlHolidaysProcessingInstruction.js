var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlHolidaysProcessingInstruction (underlyingStreamCommoditySettlHolidaysProcessingInstruction) {
  this.message = underlyingStreamCommoditySettlHolidaysProcessingInstruction;
}

UnderlyingStreamCommoditySettlHolidaysProcessingInstruction.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlHolidaysProcessingInstruction.Tag = '42013';

UnderlyingStreamCommoditySettlHolidaysProcessingInstruction.Type = 'INT';

module.exports = UnderlyingStreamCommoditySettlHolidaysProcessingInstruction;