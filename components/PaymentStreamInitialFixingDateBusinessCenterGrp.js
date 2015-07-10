var NoPaymentStreamInitialFixingDateBusinessCenters = require('../fields/NoPaymentStreamInitialFixingDateBusinessCenters');
var PaymentStreamInitialFixingDateBusinessCenter = require('../fields/PaymentStreamInitialFixingDateBusinessCenter');

function PaymentStreamInitialFixingDateBusinessCenterGrp (paymentStreamInitialFixingDateBusinessCenterGrp) {
  this.message = paymentStreamInitialFixingDateBusinessCenterGrp;
}

/* group */

/* field */
PaymentStreamInitialFixingDateBusinessCenterGrp.prototype.paymentStreamInitialFixingDateBusinessCenter = function () {
  return new PaymentStreamInitialFixingDateBusinessCenter(this.message.tags[PaymentStreamInitialFixingDateBusinessCenter.Tag]);
};

/* end group */

PaymentStreamInitialFixingDateBusinessCenterGrp.Tag = '40949';

module.exports = PaymentStreamInitialFixingDateBusinessCenterGrp;