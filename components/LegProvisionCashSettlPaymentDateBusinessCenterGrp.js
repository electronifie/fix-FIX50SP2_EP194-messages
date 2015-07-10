var NoLegProvisionCashSettlPaymentDateBusinessCenters = require('../fields/NoLegProvisionCashSettlPaymentDateBusinessCenters');
var LegProvisionCashSettlPaymentDateBusinessCenter = require('../fields/LegProvisionCashSettlPaymentDateBusinessCenter');

function LegProvisionCashSettlPaymentDateBusinessCenterGrp (legProvisionCashSettlPaymentDateBusinessCenterGrp) {
  this.message = legProvisionCashSettlPaymentDateBusinessCenterGrp;
}

/* group */

/* field */
LegProvisionCashSettlPaymentDateBusinessCenterGrp.prototype.legProvisionCashSettlPaymentDateBusinessCenter = function () {
  return new LegProvisionCashSettlPaymentDateBusinessCenter(this.message.tags[LegProvisionCashSettlPaymentDateBusinessCenter.Tag]);
};

/* end group */

LegProvisionCashSettlPaymentDateBusinessCenterGrp.Tag = '40934';

module.exports = LegProvisionCashSettlPaymentDateBusinessCenterGrp;