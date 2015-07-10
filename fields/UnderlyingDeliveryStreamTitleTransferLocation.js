var invert = require('invert-obj');

function UnderlyingDeliveryStreamTitleTransferLocation (underlyingDeliveryStreamTitleTransferLocation) {
  this.message = underlyingDeliveryStreamTitleTransferLocation;
}

UnderlyingDeliveryStreamTitleTransferLocation.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamTitleTransferLocation.Tag = '41787';

UnderlyingDeliveryStreamTitleTransferLocation.Type = 'STRING';

module.exports = UnderlyingDeliveryStreamTitleTransferLocation;