var invert = require('invert-obj');

function UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator (underlyingPaymentStreamMasterAgreementPaymentDatesIndicator) {
  this.message = underlyingPaymentStreamMasterAgreementPaymentDatesIndicator;
}

UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator.Tag = '41940';

UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator;