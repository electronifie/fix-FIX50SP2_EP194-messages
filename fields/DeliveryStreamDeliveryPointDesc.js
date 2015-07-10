var invert = require('invert-obj');

function DeliveryStreamDeliveryPointDesc (deliveryStreamDeliveryPointDesc) {
  this.message = deliveryStreamDeliveryPointDesc;
}

DeliveryStreamDeliveryPointDesc.prototype.value = function () {
  return this.message;
};

DeliveryStreamDeliveryPointDesc.Tag = '42193';

DeliveryStreamDeliveryPointDesc.Type = 'STRING';

module.exports = DeliveryStreamDeliveryPointDesc;