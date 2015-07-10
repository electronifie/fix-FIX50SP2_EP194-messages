var invert = require('invert-obj');

function DeliveryStreamTransportEquipment (deliveryStreamTransportEquipment) {
  this.message = deliveryStreamTransportEquipment;
}

DeliveryStreamTransportEquipment.prototype.value = function () {
  return this.message;
};

DeliveryStreamTransportEquipment.Tag = '41079';

DeliveryStreamTransportEquipment.Type = 'STRING';

module.exports = DeliveryStreamTransportEquipment;