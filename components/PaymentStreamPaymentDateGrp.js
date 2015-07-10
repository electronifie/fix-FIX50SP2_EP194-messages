var NoPaymentStreamPaymentDates = require('../fields/NoPaymentStreamPaymentDates');
var PaymentStreamPaymentDate = require('../fields/PaymentStreamPaymentDate');
var PaymentStreamPaymentDateType = require('../fields/PaymentStreamPaymentDateType');

function PaymentStreamPaymentDateGrp (paymentStreamPaymentDateGrp) {
  this.message = paymentStreamPaymentDateGrp;
}

/* group */

/* field */
PaymentStreamPaymentDateGrp.prototype.paymentStreamPaymentDate = function () {
  return new PaymentStreamPaymentDate(this.message.tags[PaymentStreamPaymentDate.Tag]);
};

/* field */
PaymentStreamPaymentDateGrp.prototype.paymentStreamPaymentDateType = function () {
  return new PaymentStreamPaymentDateType(this.message.tags[PaymentStreamPaymentDateType.Tag]);
};

/* end group */

PaymentStreamPaymentDateGrp.Tag = '41220';

module.exports = PaymentStreamPaymentDateGrp;