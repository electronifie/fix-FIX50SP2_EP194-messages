var invert = require('invert-obj');

function DeliveryScheduleSettlDay (deliveryScheduleSettlDay) {
  this.message = deliveryScheduleSettlDay;
}

DeliveryScheduleSettlDay.prototype.value = function () {
  return this.message;
};


DeliveryScheduleSettlDay.Keys = {
  'MONDAY': '1',
  'TUESDAY': '2',
  'WEDNESDAY': '3',
  'THURSDAY': '4',
  'FRIDAY': '5',
  'SATURDAY': '6',
  'SUNDAY': '7',
  'ALL_WEEKDAYS': '8',
  'ALL_DAYS': '9',
  'ALL_WEEKENDS': '10',
};

DeliveryScheduleSettlDay.Tag = '41052';

DeliveryScheduleSettlDay.Type = 'INT';

DeliveryScheduleSettlDay.Values = invert(DeliveryScheduleSettlDay.Keys);

module.exports = DeliveryScheduleSettlDay;