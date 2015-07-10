var invert = require('invert-obj');

function UnderlyingDeliveryStreamDeliveryPoint (underlyingDeliveryStreamDeliveryPoint) {
  this.message = underlyingDeliveryStreamDeliveryPoint;
}

UnderlyingDeliveryStreamDeliveryPoint.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamDeliveryPoint.Tag = '41781';

UnderlyingDeliveryStreamDeliveryPoint.Type = 'STRING';

module.exports = UnderlyingDeliveryStreamDeliveryPoint;