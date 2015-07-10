var invert = require('invert-obj');

function CreditSupportAgreementID (creditSupportAgreementId) {
  this.message = creditSupportAgreementId;
}

CreditSupportAgreementID.prototype.value = function () {
  return this.message;
};

CreditSupportAgreementID.Tag = '1969';

CreditSupportAgreementID.Type = 'STRING';

module.exports = CreditSupportAgreementID;