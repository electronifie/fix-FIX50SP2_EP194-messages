var NoProvisionCashSettlPaymentDateBusinessCenters = require('../fields/NoProvisionCashSettlPaymentDateBusinessCenters');
var ProvisionCashSettlPaymentDateBusinessCenter = require('../fields/ProvisionCashSettlPaymentDateBusinessCenter');

function ProvisionCashSettlPaymentDateBusinessCenterGrp (provisionCashSettlPaymentDateBusinessCenterGrp) {
  this.message = provisionCashSettlPaymentDateBusinessCenterGrp;
}

/* group */

/* field */
ProvisionCashSettlPaymentDateBusinessCenterGrp.prototype.provisionCashSettlPaymentDateBusinessCenter = function () {
  return new ProvisionCashSettlPaymentDateBusinessCenter(this.message.tags[ProvisionCashSettlPaymentDateBusinessCenter.Tag]);
};

/* end group */

ProvisionCashSettlPaymentDateBusinessCenterGrp.Tag = '40952';

module.exports = ProvisionCashSettlPaymentDateBusinessCenterGrp;