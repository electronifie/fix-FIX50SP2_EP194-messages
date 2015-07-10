var invert = require('invert-obj');

function DeliveryStreamTotalNegativeTolerance (deliveryStreamTotalNegativeTolerance) {
  this.message = deliveryStreamTotalNegativeTolerance;
}

DeliveryStreamTotalNegativeTolerance.prototype.value = function () {
  return this.message;
};

DeliveryStreamTotalNegativeTolerance.Tag = '41077';

DeliveryStreamTotalNegativeTolerance.Type = 'PERCENTAGE';

module.exports = DeliveryStreamTotalNegativeTolerance;