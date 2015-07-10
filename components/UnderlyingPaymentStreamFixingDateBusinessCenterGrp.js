var NoUnderlyingPaymentStreamFixingDateBusinessCenters = require('../fields/NoUnderlyingPaymentStreamFixingDateBusinessCenters');
var UnderlyingPaymentStreamFixingDateBusinessCenter = require('../fields/UnderlyingPaymentStreamFixingDateBusinessCenter');

function UnderlyingPaymentStreamFixingDateBusinessCenterGrp (underlyingPaymentStreamFixingDateBusinessCenterGrp) {
  this.message = underlyingPaymentStreamFixingDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingPaymentStreamFixingDateBusinessCenterGrp.prototype.underlyingPaymentStreamFixingDateBusinessCenter = function () {
  return new UnderlyingPaymentStreamFixingDateBusinessCenter(this.message.tags[UnderlyingPaymentStreamFixingDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingPaymentStreamFixingDateBusinessCenterGrp.Tag = '40972';

module.exports = UnderlyingPaymentStreamFixingDateBusinessCenterGrp;