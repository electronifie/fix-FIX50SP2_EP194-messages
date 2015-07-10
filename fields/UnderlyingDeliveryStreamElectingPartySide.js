var invert = require('invert-obj');

function UnderlyingDeliveryStreamElectingPartySide (underlyingDeliveryStreamElectingPartySide) {
  this.message = underlyingDeliveryStreamElectingPartySide;
}

UnderlyingDeliveryStreamElectingPartySide.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamElectingPartySide.Tag = '41799';

UnderlyingDeliveryStreamElectingPartySide.Type = 'INT';

module.exports = UnderlyingDeliveryStreamElectingPartySide;