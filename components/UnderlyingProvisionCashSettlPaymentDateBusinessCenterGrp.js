var NoUnderlyingProvisionCashSettlPaymentDateBusinessCenters = require('../fields/NoUnderlyingProvisionCashSettlPaymentDateBusinessCenters');
var UnderlyingProvisionCashSettlPaymentDateBusinessCenter = require('../fields/UnderlyingProvisionCashSettlPaymentDateBusinessCenter');

function UnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp (underlyingProvisionCashSettlPaymentDateBusinessCenterGrp) {
  this.message = underlyingProvisionCashSettlPaymentDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp.prototype.underlyingProvisionCashSettlPaymentDateBusinessCenter = function () {
  return new UnderlyingProvisionCashSettlPaymentDateBusinessCenter(this.message.tags[UnderlyingProvisionCashSettlPaymentDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp.Tag = '42180';

module.exports = UnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp;