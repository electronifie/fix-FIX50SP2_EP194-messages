var invert = require('invert-obj');

function DeliveryStreamDeliveryContingentPartySide (deliveryStreamDeliveryContingentPartySide) {
  this.message = deliveryStreamDeliveryContingentPartySide;
}

DeliveryStreamDeliveryContingentPartySide.prototype.value = function () {
  return this.message;
};

DeliveryStreamDeliveryContingentPartySide.Tag = '41065';

DeliveryStreamDeliveryContingentPartySide.Type = 'INT';

module.exports = DeliveryStreamDeliveryContingentPartySide;