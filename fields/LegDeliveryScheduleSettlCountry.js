var invert = require('invert-obj');

function LegDeliveryScheduleSettlCountry (legDeliveryScheduleSettlCountry) {
  this.message = legDeliveryScheduleSettlCountry;
}

LegDeliveryScheduleSettlCountry.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleSettlCountry.Tag = '41418';

LegDeliveryScheduleSettlCountry.Type = 'COUNTRY';

module.exports = LegDeliveryScheduleSettlCountry;