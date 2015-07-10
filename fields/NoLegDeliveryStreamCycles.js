var invert = require('invert-obj');

function NoLegDeliveryStreamCycles (noLegDeliveryStreamCycles) {
  this.message = noLegDeliveryStreamCycles;
}

NoLegDeliveryStreamCycles.prototype.value = function () {
  return this.message;
};

NoLegDeliveryStreamCycles.Tag = '41456';

NoLegDeliveryStreamCycles.Type = 'NUMINGROUP';

module.exports = NoLegDeliveryStreamCycles;