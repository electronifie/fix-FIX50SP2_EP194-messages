var invert = require('invert-obj');

function UnderlyingDeliveryScheduleSettlCountry (underlyingDeliveryScheduleSettlCountry) {
  this.message = underlyingDeliveryScheduleSettlCountry;
}

UnderlyingDeliveryScheduleSettlCountry.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleSettlCountry.Tag = '41766';

UnderlyingDeliveryScheduleSettlCountry.Type = 'COUNTRY';

module.exports = UnderlyingDeliveryScheduleSettlCountry;