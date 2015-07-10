var invert = require('invert-obj');

function NoUnderlyingDeliverySchedules (noUnderlyingDeliverySchedules) {
  this.message = noUnderlyingDeliverySchedules;
}

NoUnderlyingDeliverySchedules.prototype.value = function () {
  return this.message;
};

NoUnderlyingDeliverySchedules.Tag = '41756';

NoUnderlyingDeliverySchedules.Type = 'NUMINGROUP';

module.exports = NoUnderlyingDeliverySchedules;