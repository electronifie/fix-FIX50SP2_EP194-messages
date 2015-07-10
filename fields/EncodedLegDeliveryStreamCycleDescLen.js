var invert = require('invert-obj');

function EncodedLegDeliveryStreamCycleDescLen (encodedLegDeliveryStreamCycleDescLen) {
  this.message = encodedLegDeliveryStreamCycleDescLen;
}

EncodedLegDeliveryStreamCycleDescLen.prototype.value = function () {
  return this.message;
};

EncodedLegDeliveryStreamCycleDescLen.Tag = '41458';

EncodedLegDeliveryStreamCycleDescLen.Type = 'LENGTH';

module.exports = EncodedLegDeliveryStreamCycleDescLen;