var invert = require('invert-obj');

function NoDeliverySchedules (noDeliverySchedules) {
  this.message = noDeliverySchedules;
}

NoDeliverySchedules.prototype.value = function () {
  return this.message;
};

NoDeliverySchedules.Tag = '41037';

NoDeliverySchedules.Type = 'NUMINGROUP';

module.exports = NoDeliverySchedules;