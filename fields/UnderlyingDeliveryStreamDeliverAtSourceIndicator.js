var invert = require('invert-obj');

function UnderlyingDeliveryStreamDeliverAtSourceIndicator (underlyingDeliveryStreamDeliverAtSourceIndicator) {
  this.message = underlyingDeliveryStreamDeliverAtSourceIndicator;
}

UnderlyingDeliveryStreamDeliverAtSourceIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamDeliverAtSourceIndicator.Tag = '41785';

UnderlyingDeliveryStreamDeliverAtSourceIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingDeliveryStreamDeliverAtSourceIndicator;