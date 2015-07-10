var invert = require('invert-obj');

function UnderlyingDeliveryStreamWithdrawalPoint (underlyingDeliveryStreamWithdrawalPoint) {
  this.message = underlyingDeliveryStreamWithdrawalPoint;
}

UnderlyingDeliveryStreamWithdrawalPoint.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamWithdrawalPoint.Tag = '41780';

UnderlyingDeliveryStreamWithdrawalPoint.Type = 'STRING';

module.exports = UnderlyingDeliveryStreamWithdrawalPoint;