var NoPaymentBusinessCenters = require('../fields/NoPaymentBusinessCenters');
var PaymentBusinessCenter = require('../fields/PaymentBusinessCenter');

function PaymentBusinessCenterGrp (paymentBusinessCenterGrp) {
  this.message = paymentBusinessCenterGrp;
}

/* group */

/* field */
PaymentBusinessCenterGrp.prototype.paymentBusinessCenter = function () {
  return new PaymentBusinessCenter(this.message.tags[PaymentBusinessCenter.Tag]);
};

/* end group */

PaymentBusinessCenterGrp.Tag = '40944';

module.exports = PaymentBusinessCenterGrp;