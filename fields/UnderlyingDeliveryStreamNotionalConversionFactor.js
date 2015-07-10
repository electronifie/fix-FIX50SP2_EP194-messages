var invert = require('invert-obj');

function UnderlyingDeliveryStreamNotionalConversionFactor (underlyingDeliveryStreamNotionalConversionFactor) {
  this.message = underlyingDeliveryStreamNotionalConversionFactor;
}

UnderlyingDeliveryStreamNotionalConversionFactor.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamNotionalConversionFactor.Tag = '41797';

UnderlyingDeliveryStreamNotionalConversionFactor.Type = 'FLOAT';

module.exports = UnderlyingDeliveryStreamNotionalConversionFactor;