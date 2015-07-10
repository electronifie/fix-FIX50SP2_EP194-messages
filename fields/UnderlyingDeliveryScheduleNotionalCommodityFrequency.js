var invert = require('invert-obj');

function UnderlyingDeliveryScheduleNotionalCommodityFrequency (underlyingDeliveryScheduleNotionalCommodityFrequency) {
  this.message = underlyingDeliveryScheduleNotionalCommodityFrequency;
}

UnderlyingDeliveryScheduleNotionalCommodityFrequency.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleNotionalCommodityFrequency.Tag = '41761';

UnderlyingDeliveryScheduleNotionalCommodityFrequency.Type = 'INT';

module.exports = UnderlyingDeliveryScheduleNotionalCommodityFrequency;