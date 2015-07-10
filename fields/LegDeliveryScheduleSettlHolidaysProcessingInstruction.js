var invert = require('invert-obj');

function LegDeliveryScheduleSettlHolidaysProcessingInstruction (legDeliveryScheduleSettlHolidaysProcessingInstruction) {
  this.message = legDeliveryScheduleSettlHolidaysProcessingInstruction;
}

LegDeliveryScheduleSettlHolidaysProcessingInstruction.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleSettlHolidaysProcessingInstruction.Tag = '41421';

LegDeliveryScheduleSettlHolidaysProcessingInstruction.Type = 'INT';

module.exports = LegDeliveryScheduleSettlHolidaysProcessingInstruction;