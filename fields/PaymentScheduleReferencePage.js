var invert = require('invert-obj');

function PaymentScheduleReferencePage (paymentScheduleReferencePage) {
  this.message = paymentScheduleReferencePage;
}

PaymentScheduleReferencePage.prototype.value = function () {
  return this.message;
};

PaymentScheduleReferencePage.Tag = '40871';

PaymentScheduleReferencePage.Type = 'STRING';

module.exports = PaymentScheduleReferencePage;