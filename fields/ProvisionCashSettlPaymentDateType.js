var invert = require('invert-obj');

function ProvisionCashSettlPaymentDateType (provisionCashSettlPaymentDateType) {
  this.message = provisionCashSettlPaymentDateType;
}

ProvisionCashSettlPaymentDateType.prototype.value = function () {
  return this.message;
};


ProvisionCashSettlPaymentDateType.Keys = {
  UNADJUSTED: '0',
  ADJUSTED: '1',
};

ProvisionCashSettlPaymentDateType.Tag = '40173';

ProvisionCashSettlPaymentDateType.Type = 'INT';

ProvisionCashSettlPaymentDateType.Values = invert(ProvisionCashSettlPaymentDateType.Keys);

module.exports = ProvisionCashSettlPaymentDateType;