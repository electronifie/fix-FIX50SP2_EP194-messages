var NoUnderlyingProvisionCashSettlPaymentDates = require('../fields/NoUnderlyingProvisionCashSettlPaymentDates');
var UnderlyingProvisionCashSettlPaymentDate = require('../fields/UnderlyingProvisionCashSettlPaymentDate');
var UnderlyingProvisionCashSettlPaymentDateType = require('../fields/UnderlyingProvisionCashSettlPaymentDateType');

function UnderlyingProvisionCashSettlPaymentFixedDateGrp (underlyingProvisionCashSettlPaymentFixedDateGrp) {
  this.message = underlyingProvisionCashSettlPaymentFixedDateGrp;
}

/* group */

/* field */
UnderlyingProvisionCashSettlPaymentFixedDateGrp.prototype.underlyingProvisionCashSettlPaymentDate = function () {
  return new UnderlyingProvisionCashSettlPaymentDate(this.message.tags[UnderlyingProvisionCashSettlPaymentDate.Tag]);
};

/* field */
UnderlyingProvisionCashSettlPaymentFixedDateGrp.prototype.underlyingProvisionCashSettlPaymentDateType = function () {
  return new UnderlyingProvisionCashSettlPaymentDateType(this.message.tags[UnderlyingProvisionCashSettlPaymentDateType.Tag]);
};

/* end group */

UnderlyingProvisionCashSettlPaymentFixedDateGrp.Tag = '42099';

module.exports = UnderlyingProvisionCashSettlPaymentFixedDateGrp;