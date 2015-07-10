var invert = require('invert-obj');

function UnderlyingDeliveryStreamDeliveryPointDesc (underlyingDeliveryStreamDeliveryPointDesc) {
  this.message = underlyingDeliveryStreamDeliveryPointDesc;
}

UnderlyingDeliveryStreamDeliveryPointDesc.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamDeliveryPointDesc.Tag = '42197';

UnderlyingDeliveryStreamDeliveryPointDesc.Type = 'STRING';

module.exports = UnderlyingDeliveryStreamDeliveryPointDesc;