var invert = require('invert-obj');

function DeliveryStreamNotionalConversionFactor (deliveryStreamNotionalConversionFactor) {
  this.message = deliveryStreamNotionalConversionFactor;
}

DeliveryStreamNotionalConversionFactor.prototype.value = function () {
  return this.message;
};

DeliveryStreamNotionalConversionFactor.Tag = '41078';

DeliveryStreamNotionalConversionFactor.Type = 'FLOAT';

module.exports = DeliveryStreamNotionalConversionFactor;