var invert = require('invert-obj');

function DeliveryStreamDeliverAtSourceIndicator (deliveryStreamDeliverAtSourceIndicator) {
  this.message = deliveryStreamDeliverAtSourceIndicator;
}

DeliveryStreamDeliverAtSourceIndicator.prototype.value = function () {
  return this.message;
};

DeliveryStreamDeliverAtSourceIndicator.Tag = '41066';

DeliveryStreamDeliverAtSourceIndicator.Type = 'BOOLEAN';

module.exports = DeliveryStreamDeliverAtSourceIndicator;