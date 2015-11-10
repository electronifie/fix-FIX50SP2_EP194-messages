var invert = require('invert-obj');

function DeliveryStreamTitleTransferCondition (deliveryStreamTitleTransferCondition) {
  this.message = deliveryStreamTitleTransferCondition;
}

DeliveryStreamTitleTransferCondition.prototype.value = function () {
  return this.message;
};


DeliveryStreamTitleTransferCondition.Keys = {
  'TRANSFERS_WITH_RISK_OF_LOSS': '0',
  'DOES_NOT_TRANSFER_WITH_RISK_OF_LOSS': '1',
};

DeliveryStreamTitleTransferCondition.Tag = '41069';

DeliveryStreamTitleTransferCondition.Type = 'INT';

DeliveryStreamTitleTransferCondition.Values = invert(DeliveryStreamTitleTransferCondition.Keys);

module.exports = DeliveryStreamTitleTransferCondition;