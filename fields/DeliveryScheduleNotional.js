var invert = require('invert-obj');

function DeliveryScheduleNotional (deliveryScheduleNotional) {
  this.message = deliveryScheduleNotional;
}

DeliveryScheduleNotional.prototype.value = function () {
  return this.message;
};

DeliveryScheduleNotional.Tag = '41040';

DeliveryScheduleNotional.Type = 'QTY';

module.exports = DeliveryScheduleNotional;