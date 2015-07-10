var invert = require('invert-obj');

function UnderlyingDeliveryScheduleSettlTotalHours (underlyingDeliveryScheduleSettlTotalHours) {
  this.message = underlyingDeliveryScheduleSettlTotalHours;
}

UnderlyingDeliveryScheduleSettlTotalHours.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleSettlTotalHours.Tag = '41772';

UnderlyingDeliveryScheduleSettlTotalHours.Type = 'INT';

module.exports = UnderlyingDeliveryScheduleSettlTotalHours;