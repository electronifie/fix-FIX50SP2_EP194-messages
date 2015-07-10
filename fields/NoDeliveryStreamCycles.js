var invert = require('invert-obj');

function NoDeliveryStreamCycles (noDeliveryStreamCycles) {
  this.message = noDeliveryStreamCycles;
}

NoDeliveryStreamCycles.prototype.value = function () {
  return this.message;
};

NoDeliveryStreamCycles.Tag = '41081';

NoDeliveryStreamCycles.Type = 'NUMINGROUP';

module.exports = NoDeliveryStreamCycles;