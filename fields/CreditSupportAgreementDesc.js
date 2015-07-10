var invert = require('invert-obj');

function CreditSupportAgreementDesc (creditSupportAgreementDesc) {
  this.message = creditSupportAgreementDesc;
}

CreditSupportAgreementDesc.prototype.value = function () {
  return this.message;
};

CreditSupportAgreementDesc.Tag = '1967';

CreditSupportAgreementDesc.Type = 'STRING';

module.exports = CreditSupportAgreementDesc;