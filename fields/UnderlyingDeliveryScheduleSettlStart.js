var invert = require('invert-obj');

function UnderlyingDeliveryScheduleSettlStart (underlyingDeliveryScheduleSettlStart) {
  this.message = underlyingDeliveryScheduleSettlStart;
}

UnderlyingDeliveryScheduleSettlStart.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleSettlStart.Tag = '41774';

UnderlyingDeliveryScheduleSettlStart.Type = 'STRING';

module.exports = UnderlyingDeliveryScheduleSettlStart;