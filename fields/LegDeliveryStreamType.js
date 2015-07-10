var invert = require('invert-obj');

function LegDeliveryStreamType (legDeliveryStreamType) {
  this.message = legDeliveryStreamType;
}

LegDeliveryStreamType.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamType.Tag = '41429';

LegDeliveryStreamType.Type = 'INT';

module.exports = LegDeliveryStreamType;