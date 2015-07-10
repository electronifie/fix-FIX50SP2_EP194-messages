var invert = require('invert-obj');

function UnderlyingDeliveryScheduleNotional (underlyingDeliveryScheduleNotional) {
  this.message = underlyingDeliveryScheduleNotional;
}

UnderlyingDeliveryScheduleNotional.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleNotional.Tag = '41759';

UnderlyingDeliveryScheduleNotional.Type = 'QTY';

module.exports = UnderlyingDeliveryScheduleNotional;