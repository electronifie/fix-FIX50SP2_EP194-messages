var invert = require('invert-obj');

function LegDeliveryStreamEntryPoint (legDeliveryStreamEntryPoint) {
  this.message = legDeliveryStreamEntryPoint;
}

LegDeliveryStreamEntryPoint.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamEntryPoint.Tag = '41431';

LegDeliveryStreamEntryPoint.Type = 'STRING';

module.exports = LegDeliveryStreamEntryPoint;