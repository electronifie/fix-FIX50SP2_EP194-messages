var invert = require('invert-obj');

function EncodedUnderlyingDeliveryStreamCycleDescLen (encodedUnderlyingDeliveryStreamCycleDescLen) {
  this.message = encodedUnderlyingDeliveryStreamCycleDescLen;
}

EncodedUnderlyingDeliveryStreamCycleDescLen.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingDeliveryStreamCycleDescLen.Tag = '41806';

EncodedUnderlyingDeliveryStreamCycleDescLen.Type = 'LENGTH';

module.exports = EncodedUnderlyingDeliveryStreamCycleDescLen;