var invert = require('invert-obj');

function LegDeliveryStreamTitleTransferLocation (legDeliveryStreamTitleTransferLocation) {
  this.message = legDeliveryStreamTitleTransferLocation;
}

LegDeliveryStreamTitleTransferLocation.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamTitleTransferLocation.Tag = '41439';

LegDeliveryStreamTitleTransferLocation.Type = 'STRING';

module.exports = LegDeliveryStreamTitleTransferLocation;