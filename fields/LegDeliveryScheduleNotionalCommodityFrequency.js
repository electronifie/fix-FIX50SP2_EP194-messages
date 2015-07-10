var invert = require('invert-obj');

function LegDeliveryScheduleNotionalCommodityFrequency (legDeliveryScheduleNotionalCommodityFrequency) {
  this.message = legDeliveryScheduleNotionalCommodityFrequency;
}

LegDeliveryScheduleNotionalCommodityFrequency.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleNotionalCommodityFrequency.Tag = '41413';

LegDeliveryScheduleNotionalCommodityFrequency.Type = 'INT';

module.exports = LegDeliveryScheduleNotionalCommodityFrequency;