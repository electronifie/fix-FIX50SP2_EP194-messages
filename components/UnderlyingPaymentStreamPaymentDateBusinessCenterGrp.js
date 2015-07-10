var NoUnderlyingPaymentStreamPaymentDateBusinessCenters = require('../fields/NoUnderlyingPaymentStreamPaymentDateBusinessCenters');
var UnderlyingPaymentStreamPaymentDateBusinessCenter = require('../fields/UnderlyingPaymentStreamPaymentDateBusinessCenter');

function UnderlyingPaymentStreamPaymentDateBusinessCenterGrp (underlyingPaymentStreamPaymentDateBusinessCenterGrp) {
  this.message = underlyingPaymentStreamPaymentDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingPaymentStreamPaymentDateBusinessCenterGrp.prototype.underlyingPaymentStreamPaymentDateBusinessCenter = function () {
  return new UnderlyingPaymentStreamPaymentDateBusinessCenter(this.message.tags[UnderlyingPaymentStreamPaymentDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingPaymentStreamPaymentDateBusinessCenterGrp.Tag = '40969';

module.exports = UnderlyingPaymentStreamPaymentDateBusinessCenterGrp;