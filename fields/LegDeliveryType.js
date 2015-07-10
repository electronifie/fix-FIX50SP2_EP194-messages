var invert = require('invert-obj');

function LegDeliveryType (legDeliveryType) {
  this.message = legDeliveryType;
}

LegDeliveryType.prototype.value = function () {
  return this.message;
};

LegDeliveryType.Tag = '2504';

LegDeliveryType.Type = 'INT';

module.exports = LegDeliveryType;