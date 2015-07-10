var invert = require('invert-obj');

function DeliveryStreamCycleDesc (deliveryStreamCycleDesc) {
  this.message = deliveryStreamCycleDesc;
}

DeliveryStreamCycleDesc.prototype.value = function () {
  return this.message;
};

DeliveryStreamCycleDesc.Tag = '41082';

DeliveryStreamCycleDesc.Type = 'STRING';

module.exports = DeliveryStreamCycleDesc;