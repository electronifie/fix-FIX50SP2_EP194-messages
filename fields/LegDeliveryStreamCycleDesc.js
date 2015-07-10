var invert = require('invert-obj');

function LegDeliveryStreamCycleDesc (legDeliveryStreamCycleDesc) {
  this.message = legDeliveryStreamCycleDesc;
}

LegDeliveryStreamCycleDesc.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamCycleDesc.Tag = '41457';

LegDeliveryStreamCycleDesc.Type = 'STRING';

module.exports = LegDeliveryStreamCycleDesc;