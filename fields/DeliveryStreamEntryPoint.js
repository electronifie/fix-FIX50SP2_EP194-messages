var invert = require('invert-obj');

function DeliveryStreamEntryPoint (deliveryStreamEntryPoint) {
  this.message = deliveryStreamEntryPoint;
}

DeliveryStreamEntryPoint.prototype.value = function () {
  return this.message;
};

DeliveryStreamEntryPoint.Tag = '41060';

DeliveryStreamEntryPoint.Type = 'STRING';

module.exports = DeliveryStreamEntryPoint;