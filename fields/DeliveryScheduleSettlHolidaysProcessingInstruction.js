var invert = require('invert-obj');

function DeliveryScheduleSettlHolidaysProcessingInstruction (deliveryScheduleSettlHolidaysProcessingInstruction) {
  this.message = deliveryScheduleSettlHolidaysProcessingInstruction;
}

DeliveryScheduleSettlHolidaysProcessingInstruction.prototype.value = function () {
  return this.message;
};


DeliveryScheduleSettlHolidaysProcessingInstruction.Keys = {
  DO_NOT_INCLUDE_HOLIDAYS: '0',
  INCLUDE_HOLIDAYS: '1',
};

DeliveryScheduleSettlHolidaysProcessingInstruction.Tag = '41050';

DeliveryScheduleSettlHolidaysProcessingInstruction.Type = 'INT';

DeliveryScheduleSettlHolidaysProcessingInstruction.Values = invert(DeliveryScheduleSettlHolidaysProcessingInstruction.Keys);

module.exports = DeliveryScheduleSettlHolidaysProcessingInstruction;