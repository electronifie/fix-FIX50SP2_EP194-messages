var invert = require('invert-obj');

function DeliveryStreamDeliveryPoint (deliveryStreamDeliveryPoint) {
  this.message = deliveryStreamDeliveryPoint;
}

DeliveryStreamDeliveryPoint.prototype.value = function () {
  return this.message;
};

DeliveryStreamDeliveryPoint.Tag = '41062';

DeliveryStreamDeliveryPoint.Type = 'STRING';

module.exports = DeliveryStreamDeliveryPoint;