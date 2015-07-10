var invert = require('invert-obj');

function PaymentScheduleXID (paymentScheduleXid) {
  this.message = paymentScheduleXid;
}

PaymentScheduleXID.prototype.value = function () {
  return this.message;
};

PaymentScheduleXID.Tag = '41164';

PaymentScheduleXID.Type = 'XID';

module.exports = PaymentScheduleXID;