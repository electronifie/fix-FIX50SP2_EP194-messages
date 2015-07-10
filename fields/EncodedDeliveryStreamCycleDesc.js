var invert = require('invert-obj');

function EncodedDeliveryStreamCycleDesc (encodedDeliveryStreamCycleDesc) {
  this.message = encodedDeliveryStreamCycleDesc;
}

EncodedDeliveryStreamCycleDesc.prototype.value = function () {
  return this.message;
};

EncodedDeliveryStreamCycleDesc.Tag = '41084';

EncodedDeliveryStreamCycleDesc.Type = 'DATA';

module.exports = EncodedDeliveryStreamCycleDesc;