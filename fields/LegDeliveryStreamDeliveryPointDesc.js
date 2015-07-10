var invert = require('invert-obj');

function LegDeliveryStreamDeliveryPointDesc (legDeliveryStreamDeliveryPointDesc) {
  this.message = legDeliveryStreamDeliveryPointDesc;
}

LegDeliveryStreamDeliveryPointDesc.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamDeliveryPointDesc.Tag = '42195';

LegDeliveryStreamDeliveryPointDesc.Type = 'STRING';

module.exports = LegDeliveryStreamDeliveryPointDesc;