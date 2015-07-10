var NoProvisionCashSettlPaymentDates = require('../fields/NoProvisionCashSettlPaymentDates');
var ProvisionCashSettlPaymentDate = require('../fields/ProvisionCashSettlPaymentDate');
var ProvisionCashSettlPaymentDateType = require('../fields/ProvisionCashSettlPaymentDateType');

function ProvisionCashSettlPaymentFixedDateGrp (provisionCashSettlPaymentFixedDateGrp) {
  this.message = provisionCashSettlPaymentFixedDateGrp;
}

/* group */

/* field */
ProvisionCashSettlPaymentFixedDateGrp.prototype.provisionCashSettlPaymentDate = function () {
  return new ProvisionCashSettlPaymentDate(this.message.tags[ProvisionCashSettlPaymentDate.Tag]);
};

/* field */
ProvisionCashSettlPaymentFixedDateGrp.prototype.provisionCashSettlPaymentDateType = function () {
  return new ProvisionCashSettlPaymentDateType(this.message.tags[ProvisionCashSettlPaymentDateType.Tag]);
};

/* end group */

ProvisionCashSettlPaymentFixedDateGrp.Tag = '40171';

module.exports = ProvisionCashSettlPaymentFixedDateGrp;