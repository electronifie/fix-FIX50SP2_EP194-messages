var invert = require('invert-obj');

function UnderlyingDeliveryScheduleSettlHolidaysProcessingInstruction (underlyingDeliveryScheduleSettlHolidaysProcessingInstruction) {
  this.message = underlyingDeliveryScheduleSettlHolidaysProcessingInstruction;
}

UnderlyingDeliveryScheduleSettlHolidaysProcessingInstruction.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleSettlHolidaysProcessingInstruction.Tag = '41769';

UnderlyingDeliveryScheduleSettlHolidaysProcessingInstruction.Type = 'INT';

module.exports = UnderlyingDeliveryScheduleSettlHolidaysProcessingInstruction;