var NoLegProvisionCashSettlPaymentDates = require('../fields/NoLegProvisionCashSettlPaymentDates');
var LegProvisionCashSettlPaymentDate = require('../fields/LegProvisionCashSettlPaymentDate');
var LegProvisionCashSettlPaymentDateType = require('../fields/LegProvisionCashSettlPaymentDateType');

function LegProvisionCashSettlPaymentFixedDateGrp (legProvisionCashSettlPaymentFixedDateGrp) {
  this.message = legProvisionCashSettlPaymentFixedDateGrp;
}

/* group */

/* field */
LegProvisionCashSettlPaymentFixedDateGrp.prototype.legProvisionCashSettlPaymentDate = function () {
  return new LegProvisionCashSettlPaymentDate(this.message.tags[LegProvisionCashSettlPaymentDate.Tag]);
};

/* field */
LegProvisionCashSettlPaymentFixedDateGrp.prototype.legProvisionCashSettlPaymentDateType = function () {
  return new LegProvisionCashSettlPaymentDateType(this.message.tags[LegProvisionCashSettlPaymentDateType.Tag]);
};

/* end group */

LegProvisionCashSettlPaymentFixedDateGrp.Tag = '40473';

module.exports = LegProvisionCashSettlPaymentFixedDateGrp;