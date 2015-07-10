var invert = require('invert-obj');

function UnderlyingDeliveryStreamDeliveryContingentPartySide (underlyingDeliveryStreamDeliveryContingentPartySide) {
  this.message = underlyingDeliveryStreamDeliveryContingentPartySide;
}

UnderlyingDeliveryStreamDeliveryContingentPartySide.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamDeliveryContingentPartySide.Tag = '41784';

UnderlyingDeliveryStreamDeliveryContingentPartySide.Type = 'INT';

module.exports = UnderlyingDeliveryStreamDeliveryContingentPartySide;