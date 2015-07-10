var invert = require('invert-obj');

function PaymentStreamDayCount (paymentStreamDayCount) {
  this.message = paymentStreamDayCount;
}

PaymentStreamDayCount.prototype.value = function () {
  return this.message;
};

PaymentStreamDayCount.Tag = '40742';

PaymentStreamDayCount.Type = 'INT';

module.exports = PaymentStreamDayCount;