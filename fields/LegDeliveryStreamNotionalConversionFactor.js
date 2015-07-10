var invert = require('invert-obj');

function LegDeliveryStreamNotionalConversionFactor (legDeliveryStreamNotionalConversionFactor) {
  this.message = legDeliveryStreamNotionalConversionFactor;
}

LegDeliveryStreamNotionalConversionFactor.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamNotionalConversionFactor.Tag = '41449';

LegDeliveryStreamNotionalConversionFactor.Type = 'FLOAT';

module.exports = LegDeliveryStreamNotionalConversionFactor;