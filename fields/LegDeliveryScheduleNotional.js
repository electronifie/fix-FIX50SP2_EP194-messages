var invert = require('invert-obj');

function LegDeliveryScheduleNotional (legDeliveryScheduleNotional) {
  this.message = legDeliveryScheduleNotional;
}

LegDeliveryScheduleNotional.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleNotional.Tag = '41411';

LegDeliveryScheduleNotional.Type = 'QTY';

module.exports = LegDeliveryScheduleNotional;