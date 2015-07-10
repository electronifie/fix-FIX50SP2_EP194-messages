var invert = require('invert-obj');

function LegDeliveryStreamTransportEquipment (legDeliveryStreamTransportEquipment) {
  this.message = legDeliveryStreamTransportEquipment;
}

LegDeliveryStreamTransportEquipment.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamTransportEquipment.Tag = '41450';

LegDeliveryStreamTransportEquipment.Type = 'STRING';

module.exports = LegDeliveryStreamTransportEquipment;