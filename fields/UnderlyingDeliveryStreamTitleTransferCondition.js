var invert = require('invert-obj');

function UnderlyingDeliveryStreamTitleTransferCondition (underlyingDeliveryStreamTitleTransferCondition) {
  this.message = underlyingDeliveryStreamTitleTransferCondition;
}

UnderlyingDeliveryStreamTitleTransferCondition.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamTitleTransferCondition.Tag = '41788';

UnderlyingDeliveryStreamTitleTransferCondition.Type = 'INT';

module.exports = UnderlyingDeliveryStreamTitleTransferCondition;