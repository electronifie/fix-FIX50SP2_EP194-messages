var invert = require('invert-obj');

function LegPaymentStreamMasterAgreementPaymentDatesIndicator (legPaymentStreamMasterAgreementPaymentDatesIndicator) {
  this.message = legPaymentStreamMasterAgreementPaymentDatesIndicator;
}

LegPaymentStreamMasterAgreementPaymentDatesIndicator.prototype.value = function () {
  return this.message;
};

LegPaymentStreamMasterAgreementPaymentDatesIndicator.Tag = '41592';

LegPaymentStreamMasterAgreementPaymentDatesIndicator.Type = 'BOOLEAN';

module.exports = LegPaymentStreamMasterAgreementPaymentDatesIndicator;