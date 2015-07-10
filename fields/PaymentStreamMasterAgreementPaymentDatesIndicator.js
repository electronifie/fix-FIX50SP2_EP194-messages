var invert = require('invert-obj');

function PaymentStreamMasterAgreementPaymentDatesIndicator (paymentStreamMasterAgreementPaymentDatesIndicator) {
  this.message = paymentStreamMasterAgreementPaymentDatesIndicator;
}

PaymentStreamMasterAgreementPaymentDatesIndicator.prototype.value = function () {
  return this.message;
};

PaymentStreamMasterAgreementPaymentDatesIndicator.Tag = '41223';

PaymentStreamMasterAgreementPaymentDatesIndicator.Type = 'BOOLEAN';

module.exports = PaymentStreamMasterAgreementPaymentDatesIndicator;