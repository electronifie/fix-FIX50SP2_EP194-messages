var invert = require('invert-obj');

function DeliveryStreamDeliveryContingency (deliveryStreamDeliveryContingency) {
  this.message = deliveryStreamDeliveryContingency;
}

DeliveryStreamDeliveryContingency.prototype.value = function () {
  return this.message;
};

DeliveryStreamDeliveryContingency.Tag = '41064';

DeliveryStreamDeliveryContingency.Type = 'STRING';

module.exports = DeliveryStreamDeliveryContingency;