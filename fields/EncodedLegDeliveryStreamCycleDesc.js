var invert = require('invert-obj');

function EncodedLegDeliveryStreamCycleDesc (encodedLegDeliveryStreamCycleDesc) {
  this.message = encodedLegDeliveryStreamCycleDesc;
}

EncodedLegDeliveryStreamCycleDesc.prototype.value = function () {
  return this.message;
};

EncodedLegDeliveryStreamCycleDesc.Tag = '41459';

EncodedLegDeliveryStreamCycleDesc.Type = 'DATA';

module.exports = EncodedLegDeliveryStreamCycleDesc;