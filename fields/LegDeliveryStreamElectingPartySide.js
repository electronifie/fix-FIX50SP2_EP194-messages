var invert = require('invert-obj');

function LegDeliveryStreamElectingPartySide (legDeliveryStreamElectingPartySide) {
  this.message = legDeliveryStreamElectingPartySide;
}

LegDeliveryStreamElectingPartySide.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamElectingPartySide.Tag = '41451';

LegDeliveryStreamElectingPartySide.Type = 'INT';

module.exports = LegDeliveryStreamElectingPartySide;