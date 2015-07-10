var invert = require('invert-obj');

function DeliveryStreamPositiveTolerance (deliveryStreamPositiveTolerance) {
  this.message = deliveryStreamPositiveTolerance;
}

DeliveryStreamPositiveTolerance.prototype.value = function () {
  return this.message;
};

DeliveryStreamPositiveTolerance.Tag = '41072';

DeliveryStreamPositiveTolerance.Type = 'FLOAT';

module.exports = DeliveryStreamPositiveTolerance;