var invert = require('invert-obj');

function PaymentStreamFRADiscounting (paymentStreamFradiscounting) {
  this.message = paymentStreamFradiscounting;
}

PaymentStreamFRADiscounting.prototype.value = function () {
  return this.message;
};


PaymentStreamFRADiscounting.Keys = {
  NONE: '0',
  INTERNATIONAL_SWAPS_AND_DERIVATIVES_ASSOCIATION: '1',
  AUSTRALIAN_FINANCIAL_MARKETS_ASSOCIATION: '2',
};

PaymentStreamFRADiscounting.Tag = '40816';

PaymentStreamFRADiscounting.Type = 'INT';

PaymentStreamFRADiscounting.Values = invert(PaymentStreamFRADiscounting.Keys);

module.exports = PaymentStreamFRADiscounting;