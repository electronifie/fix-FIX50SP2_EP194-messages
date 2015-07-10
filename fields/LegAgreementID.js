var invert = require('invert-obj');

function LegAgreementID (legAgreementId) {
  this.message = legAgreementId;
}

LegAgreementID.prototype.value = function () {
  return this.message;
};

LegAgreementID.Tag = '2498';

LegAgreementID.Type = 'STRING';

module.exports = LegAgreementID;