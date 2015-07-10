var invert = require('invert-obj');

function PaymentSettlStyle (paymentSettlStyle) {
  this.message = paymentSettlStyle;
}

PaymentSettlStyle.prototype.value = function () {
  return this.message;
};


PaymentSettlStyle.Keys = {
  STANDARD: '0',
  NET: '1',
  STANDARD_AND_NET: '2',
};

PaymentSettlStyle.Tag = '40227';

PaymentSettlStyle.Type = 'INT';

PaymentSettlStyle.Values = invert(PaymentSettlStyle.Keys);

module.exports = PaymentSettlStyle;