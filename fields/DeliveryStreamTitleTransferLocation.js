var invert = require('invert-obj');

function DeliveryStreamTitleTransferLocation (deliveryStreamTitleTransferLocation) {
  this.message = deliveryStreamTitleTransferLocation;
}

DeliveryStreamTitleTransferLocation.prototype.value = function () {
  return this.message;
};

DeliveryStreamTitleTransferLocation.Tag = '41068';

DeliveryStreamTitleTransferLocation.Type = 'STRING';

module.exports = DeliveryStreamTitleTransferLocation;