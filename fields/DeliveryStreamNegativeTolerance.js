var invert = require('invert-obj');

function DeliveryStreamNegativeTolerance (deliveryStreamNegativeTolerance) {
  this.message = deliveryStreamNegativeTolerance;
}

DeliveryStreamNegativeTolerance.prototype.value = function () {
  return this.message;
};

DeliveryStreamNegativeTolerance.Tag = '41071';

DeliveryStreamNegativeTolerance.Type = 'FLOAT';

module.exports = DeliveryStreamNegativeTolerance;