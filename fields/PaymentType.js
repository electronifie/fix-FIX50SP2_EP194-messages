var invert = require('invert-obj');

function PaymentType (paymentType) {
  this.message = paymentType;
}

PaymentType.prototype.value = function () {
  return this.message;
};


PaymentType.Keys = {
  'BROKERAGE': '0',
  'UPFRONT_FEE': '1',
  'INDEPENDENT_AMOUNT_COLLATERAL': '2',
  'PRINCIPAL_EXCHANGE': '3',
  'NOVATION_TERMINATION': '4',
  'EARLY_TERMINATION_PROVISION': '5',
  'CENCELABLE_PROVISION': '6',
  'EXTENDIBLE_PROVISION': '7',
  'CAP_RATE_PROVISION': '8',
  'FLOOR_RATE_PROVISION': '9',
  'OPTION_PREMIUM': '10',
  'SETTLEMENT_PAYMENT': '11',
  'CASH_SETTLEMENT': '12',
  'OTHER': '99',
};

PaymentType.Tag = '40213';

PaymentType.Type = 'INT';

PaymentType.Values = invert(PaymentType.Keys);

module.exports = PaymentType;