var invert = require('invert-obj');

function DeliveryStreamToleranceOptionSide (deliveryStreamToleranceOptionSide) {
  this.message = deliveryStreamToleranceOptionSide;
}

DeliveryStreamToleranceOptionSide.prototype.value = function () {
  return this.message;
};


DeliveryStreamToleranceOptionSide.Keys = {
  BUYER: '1',
  SELLER: '2',
};

DeliveryStreamToleranceOptionSide.Tag = '41075';

DeliveryStreamToleranceOptionSide.Type = 'INT';

DeliveryStreamToleranceOptionSide.Values = invert(DeliveryStreamToleranceOptionSide.Keys);

module.exports = DeliveryStreamToleranceOptionSide;