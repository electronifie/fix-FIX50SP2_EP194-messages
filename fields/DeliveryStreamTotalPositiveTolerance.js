var invert = require('invert-obj');

function DeliveryStreamTotalPositiveTolerance (deliveryStreamTotalPositiveTolerance) {
  this.message = deliveryStreamTotalPositiveTolerance;
}

DeliveryStreamTotalPositiveTolerance.prototype.value = function () {
  return this.message;
};

DeliveryStreamTotalPositiveTolerance.Tag = '41076';

DeliveryStreamTotalPositiveTolerance.Type = 'PERCENTAGE';

module.exports = DeliveryStreamTotalPositiveTolerance;