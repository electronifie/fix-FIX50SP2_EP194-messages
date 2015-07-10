var invert = require('invert-obj');

function NoUnderlyingDeliveryStreamCycles (noUnderlyingDeliveryStreamCycles) {
  this.message = noUnderlyingDeliveryStreamCycles;
}

NoUnderlyingDeliveryStreamCycles.prototype.value = function () {
  return this.message;
};

NoUnderlyingDeliveryStreamCycles.Tag = '41804';

NoUnderlyingDeliveryStreamCycles.Type = 'NUMINGROUP';

module.exports = NoUnderlyingDeliveryStreamCycles;