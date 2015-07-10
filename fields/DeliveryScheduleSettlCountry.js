var invert = require('invert-obj');

function DeliveryScheduleSettlCountry (deliveryScheduleSettlCountry) {
  this.message = deliveryScheduleSettlCountry;
}

DeliveryScheduleSettlCountry.prototype.value = function () {
  return this.message;
};

DeliveryScheduleSettlCountry.Tag = '41047';

DeliveryScheduleSettlCountry.Type = 'COUNTRY';

module.exports = DeliveryScheduleSettlCountry;