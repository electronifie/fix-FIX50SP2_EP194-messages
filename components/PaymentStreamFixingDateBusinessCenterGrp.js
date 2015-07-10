var NoPaymentStreamFixingDateBusinessCenters = require('../fields/NoPaymentStreamFixingDateBusinessCenters');
var PaymentStreamFixingDateBusinessCenter = require('../fields/PaymentStreamFixingDateBusinessCenter');

function PaymentStreamFixingDateBusinessCenterGrp (paymentStreamFixingDateBusinessCenterGrp) {
  this.message = paymentStreamFixingDateBusinessCenterGrp;
}

/* group */

/* field */
PaymentStreamFixingDateBusinessCenterGrp.prototype.paymentStreamFixingDateBusinessCenter = function () {
  return new PaymentStreamFixingDateBusinessCenter(this.message.tags[PaymentStreamFixingDateBusinessCenter.Tag]);
};

/* end group */

PaymentStreamFixingDateBusinessCenterGrp.Tag = '40950';

module.exports = PaymentStreamFixingDateBusinessCenterGrp;