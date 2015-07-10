var invert = require('invert-obj');

function UnderlyingDeliveryStreamTransportEquipment (underlyingDeliveryStreamTransportEquipment) {
  this.message = underlyingDeliveryStreamTransportEquipment;
}

UnderlyingDeliveryStreamTransportEquipment.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamTransportEquipment.Tag = '41798';

UnderlyingDeliveryStreamTransportEquipment.Type = 'STRING';

module.exports = UnderlyingDeliveryStreamTransportEquipment;