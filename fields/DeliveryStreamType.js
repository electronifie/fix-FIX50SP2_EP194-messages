var invert = require('invert-obj');

function DeliveryStreamType (deliveryStreamType) {
  this.message = deliveryStreamType;
}

DeliveryStreamType.prototype.value = function () {
  return this.message;
};


DeliveryStreamType.Keys = {
  PERIODIC: '0',
  INITIAL: '1',
  SINGLE: '2',
};

DeliveryStreamType.Tag = '41058';

DeliveryStreamType.Type = 'INT';

DeliveryStreamType.Values = invert(DeliveryStreamType.Keys);

module.exports = DeliveryStreamType;