var invert = require('invert-obj');

function LegDeliveryStreamWithdrawalPoint (legDeliveryStreamWithdrawalPoint) {
  this.message = legDeliveryStreamWithdrawalPoint;
}

LegDeliveryStreamWithdrawalPoint.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamWithdrawalPoint.Tag = '41432';

LegDeliveryStreamWithdrawalPoint.Type = 'STRING';

module.exports = LegDeliveryStreamWithdrawalPoint;