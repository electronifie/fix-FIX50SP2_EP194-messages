var invert = require('invert-obj');

function UnderlyingDeliveryScheduleSettlDay (underlyingDeliveryScheduleSettlDay) {
  this.message = underlyingDeliveryScheduleSettlDay;
}

UnderlyingDeliveryScheduleSettlDay.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleSettlDay.Tag = '41771';

UnderlyingDeliveryScheduleSettlDay.Type = 'INT';

module.exports = UnderlyingDeliveryScheduleSettlDay;