var NoPaymentStreamPaymentDateBusinessCenters = require('../fields/NoPaymentStreamPaymentDateBusinessCenters');
var PaymentStreamPaymentDateBusinessCenter = require('../fields/PaymentStreamPaymentDateBusinessCenter');

function PaymentStreamPaymentDateBusinessCenterGrp (paymentStreamPaymentDateBusinessCenterGrp) {
  this.message = paymentStreamPaymentDateBusinessCenterGrp;
}

/* group */

/* field */
PaymentStreamPaymentDateBusinessCenterGrp.prototype.paymentStreamPaymentDateBusinessCenter = function () {
  return new PaymentStreamPaymentDateBusinessCenter(this.message.tags[PaymentStreamPaymentDateBusinessCenter.Tag]);
};

/* end group */

PaymentStreamPaymentDateBusinessCenterGrp.Tag = '40947';

module.exports = PaymentStreamPaymentDateBusinessCenterGrp;