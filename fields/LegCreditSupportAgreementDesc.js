var invert = require('invert-obj');

function LegCreditSupportAgreementDesc (legCreditSupportAgreementDesc) {
  this.message = legCreditSupportAgreementDesc;
}

LegCreditSupportAgreementDesc.prototype.value = function () {
  return this.message;
};

LegCreditSupportAgreementDesc.Tag = '2502';

LegCreditSupportAgreementDesc.Type = 'STRING';

module.exports = LegCreditSupportAgreementDesc;