var invert = require('invert-obj');

function ProvisionCashSettlMethod (provisionCashSettlMethod) {
  this.message = provisionCashSettlMethod;
}

ProvisionCashSettlMethod.prototype.value = function () {
  return this.message;
};


ProvisionCashSettlMethod.Keys = {
  'CASH_PRICE': '0',
  'CASH_PRICE_ALTERNATE': '1',
  'PAR_YIELD_CURVE_ADJUSTED': '2',
  'ZERO_COUPON_YIELD_CURVE_ADJUSTED': '3',
  'PAR_YIELD_CURVE_UNADJUSTED': '4',
  'CROSS_CURRENCY': '5',
  'COLLATERALIZED_PRICE': '6',
};

ProvisionCashSettlMethod.Tag = '40108';

ProvisionCashSettlMethod.Type = 'INT';

ProvisionCashSettlMethod.Values = invert(ProvisionCashSettlMethod.Keys);

module.exports = ProvisionCashSettlMethod;