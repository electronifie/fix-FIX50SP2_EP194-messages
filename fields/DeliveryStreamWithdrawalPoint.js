var invert = require('invert-obj');

function DeliveryStreamWithdrawalPoint (deliveryStreamWithdrawalPoint) {
  this.message = deliveryStreamWithdrawalPoint;
}

DeliveryStreamWithdrawalPoint.prototype.value = function () {
  return this.message;
};

DeliveryStreamWithdrawalPoint.Tag = '41061';

DeliveryStreamWithdrawalPoint.Type = 'STRING';

module.exports = DeliveryStreamWithdrawalPoint;