var invert = require('invert-obj');

function UnderlyingDeliveryScheduleSettlTimeZone (underlyingDeliveryScheduleSettlTimeZone) {
  this.message = underlyingDeliveryScheduleSettlTimeZone;
}

UnderlyingDeliveryScheduleSettlTimeZone.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleSettlTimeZone.Tag = '41767';

UnderlyingDeliveryScheduleSettlTimeZone.Type = 'STRING';

module.exports = UnderlyingDeliveryScheduleSettlTimeZone;