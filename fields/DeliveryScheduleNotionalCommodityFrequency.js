var invert = require('invert-obj');

function DeliveryScheduleNotionalCommodityFrequency (deliveryScheduleNotionalCommodityFrequency) {
  this.message = deliveryScheduleNotionalCommodityFrequency;
}

DeliveryScheduleNotionalCommodityFrequency.prototype.value = function () {
  return this.message;
};

DeliveryScheduleNotionalCommodityFrequency.Tag = '41042';

DeliveryScheduleNotionalCommodityFrequency.Type = 'INT';

module.exports = DeliveryScheduleNotionalCommodityFrequency;