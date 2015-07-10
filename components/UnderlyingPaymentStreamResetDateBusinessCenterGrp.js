var NoUnderlyingPaymentStreamResetDateBusinessCenters = require('../fields/NoUnderlyingPaymentStreamResetDateBusinessCenters');
var UnderlyingPaymentStreamResetDateBusinessCenter = require('../fields/UnderlyingPaymentStreamResetDateBusinessCenter');

function UnderlyingPaymentStreamResetDateBusinessCenterGrp (underlyingPaymentStreamResetDateBusinessCenterGrp) {
  this.message = underlyingPaymentStreamResetDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingPaymentStreamResetDateBusinessCenterGrp.prototype.underlyingPaymentStreamResetDateBusinessCenter = function () {
  return new UnderlyingPaymentStreamResetDateBusinessCenter(this.message.tags[UnderlyingPaymentStreamResetDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingPaymentStreamResetDateBusinessCenterGrp.Tag = '40970';

module.exports = UnderlyingPaymentStreamResetDateBusinessCenterGrp;