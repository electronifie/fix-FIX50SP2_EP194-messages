var NoPaymentStreamResetDateBusinessCenters = require('../fields/NoPaymentStreamResetDateBusinessCenters');
var PaymentStreamResetDateBusinessCenter = require('../fields/PaymentStreamResetDateBusinessCenter');

function PaymentStreamResetDateBusinessCenterGrp (paymentStreamResetDateBusinessCenterGrp) {
  this.message = paymentStreamResetDateBusinessCenterGrp;
}

/* group */

/* field */
PaymentStreamResetDateBusinessCenterGrp.prototype.paymentStreamResetDateBusinessCenter = function () {
  return new PaymentStreamResetDateBusinessCenter(this.message.tags[PaymentStreamResetDateBusinessCenter.Tag]);
};

/* end group */

PaymentStreamResetDateBusinessCenterGrp.Tag = '40948';

module.exports = PaymentStreamResetDateBusinessCenterGrp;