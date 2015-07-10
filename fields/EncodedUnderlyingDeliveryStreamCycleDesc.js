var invert = require('invert-obj');

function EncodedUnderlyingDeliveryStreamCycleDesc (encodedUnderlyingDeliveryStreamCycleDesc) {
  this.message = encodedUnderlyingDeliveryStreamCycleDesc;
}

EncodedUnderlyingDeliveryStreamCycleDesc.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingDeliveryStreamCycleDesc.Tag = '41807';

EncodedUnderlyingDeliveryStreamCycleDesc.Type = 'DATA';

module.exports = EncodedUnderlyingDeliveryStreamCycleDesc;