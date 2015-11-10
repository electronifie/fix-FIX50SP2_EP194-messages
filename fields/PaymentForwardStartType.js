var invert = require('invert-obj');

function PaymentForwardStartType (paymentForwardStartType) {
  this.message = paymentForwardStartType;
}

PaymentForwardStartType.prototype.value = function () {
  return this.message;
};


PaymentForwardStartType.Keys = {
  'PREPAID': '0',
  'POST_PAID': '1',
  'VARIABLE': '2',
  'FIXED': '3',
};

PaymentForwardStartType.Tag = '41160';

PaymentForwardStartType.Type = 'INT';

PaymentForwardStartType.Values = invert(PaymentForwardStartType.Keys);

module.exports = PaymentForwardStartType;