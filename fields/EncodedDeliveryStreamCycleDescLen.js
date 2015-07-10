var invert = require('invert-obj');

function EncodedDeliveryStreamCycleDescLen (encodedDeliveryStreamCycleDescLen) {
  this.message = encodedDeliveryStreamCycleDescLen;
}

EncodedDeliveryStreamCycleDescLen.prototype.value = function () {
  return this.message;
};

EncodedDeliveryStreamCycleDescLen.Tag = '41083';

EncodedDeliveryStreamCycleDescLen.Type = 'LENGTH';

module.exports = EncodedDeliveryStreamCycleDescLen;