var NoUnderlyingPaymentStreamInitialFixingDateBusinessCenters = require('../fields/NoUnderlyingPaymentStreamInitialFixingDateBusinessCenters');
var UnderlyingPaymentStreamInitialFixingDateBusinessCenter = require('../fields/UnderlyingPaymentStreamInitialFixingDateBusinessCenter');

function UnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp (underlyingPaymentStreamInitialFixingDateBusinessCenterGrp) {
  this.message = underlyingPaymentStreamInitialFixingDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp.prototype.underlyingPaymentStreamInitialFixingDateBusinessCenter = function () {
  return new UnderlyingPaymentStreamInitialFixingDateBusinessCenter(this.message.tags[UnderlyingPaymentStreamInitialFixingDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp.Tag = '40971';

module.exports = UnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp;