var invert = require('invert-obj');

function LegCreditSupportAgreementDate (legCreditSupportAgreementDate) {
  this.message = legCreditSupportAgreementDate;
}

LegCreditSupportAgreementDate.prototype.value = function () {
  return this.message;
};

LegCreditSupportAgreementDate.Tag = '2501';

LegCreditSupportAgreementDate.Type = 'LOCALMKTDATE';

module.exports = LegCreditSupportAgreementDate;