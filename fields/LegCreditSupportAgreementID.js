var invert = require('invert-obj');

function LegCreditSupportAgreementID (legCreditSupportAgreementId) {
  this.message = legCreditSupportAgreementId;
}

LegCreditSupportAgreementID.prototype.value = function () {
  return this.message;
};

LegCreditSupportAgreementID.Tag = '2503';

LegCreditSupportAgreementID.Type = 'STRING';

module.exports = LegCreditSupportAgreementID;