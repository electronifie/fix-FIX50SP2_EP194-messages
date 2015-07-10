var invert = require('invert-obj');

function CreditSupportAgreementDate (creditSupportAgreementDate) {
  this.message = creditSupportAgreementDate;
}

CreditSupportAgreementDate.prototype.value = function () {
  return this.message;
};

CreditSupportAgreementDate.Tag = '1968';

CreditSupportAgreementDate.Type = 'LOCALMKTDATE';

module.exports = CreditSupportAgreementDate;