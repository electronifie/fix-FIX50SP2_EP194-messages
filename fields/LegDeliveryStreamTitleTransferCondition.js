var invert = require('invert-obj');

function LegDeliveryStreamTitleTransferCondition (legDeliveryStreamTitleTransferCondition) {
  this.message = legDeliveryStreamTitleTransferCondition;
}

LegDeliveryStreamTitleTransferCondition.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamTitleTransferCondition.Tag = '41440';

LegDeliveryStreamTitleTransferCondition.Type = 'INT';

module.exports = LegDeliveryStreamTitleTransferCondition;