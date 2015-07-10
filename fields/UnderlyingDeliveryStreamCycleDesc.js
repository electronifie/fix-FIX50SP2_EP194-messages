var invert = require('invert-obj');

function UnderlyingDeliveryStreamCycleDesc (underlyingDeliveryStreamCycleDesc) {
  this.message = underlyingDeliveryStreamCycleDesc;
}

UnderlyingDeliveryStreamCycleDesc.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamCycleDesc.Tag = '41805';

UnderlyingDeliveryStreamCycleDesc.Type = 'STRING';

module.exports = UnderlyingDeliveryStreamCycleDesc;