var invert = require('invert-obj');

function DeliveryStreamToleranceType (deliveryStreamToleranceType) {
  this.message = deliveryStreamToleranceType;
}

DeliveryStreamToleranceType.prototype.value = function () {
  return this.message;
};

DeliveryStreamToleranceType.Tag = '41074';

DeliveryStreamToleranceType.Type = 'INT';

module.exports = DeliveryStreamToleranceType;