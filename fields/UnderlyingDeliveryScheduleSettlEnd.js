var invert = require('invert-obj');

function UnderlyingDeliveryScheduleSettlEnd (underlyingDeliveryScheduleSettlEnd) {
  this.message = underlyingDeliveryScheduleSettlEnd;
}

UnderlyingDeliveryScheduleSettlEnd.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleSettlEnd.Tag = '41775';

UnderlyingDeliveryScheduleSettlEnd.Type = 'STRING';

module.exports = UnderlyingDeliveryScheduleSettlEnd;