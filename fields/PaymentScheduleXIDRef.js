var invert = require('invert-obj');

function PaymentScheduleXIDRef (paymentScheduleXidref) {
  this.message = paymentScheduleXidref;
}

PaymentScheduleXIDRef.prototype.value = function () {
  return this.message;
};

PaymentScheduleXIDRef.Tag = '41165';

PaymentScheduleXIDRef.Type = 'XIDREF';

module.exports = PaymentScheduleXIDRef;