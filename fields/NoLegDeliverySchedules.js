var invert = require('invert-obj');

function NoLegDeliverySchedules (noLegDeliverySchedules) {
  this.message = noLegDeliverySchedules;
}

NoLegDeliverySchedules.prototype.value = function () {
  return this.message;
};

NoLegDeliverySchedules.Tag = '41408';

NoLegDeliverySchedules.Type = 'NUMINGROUP';

module.exports = NoLegDeliverySchedules;