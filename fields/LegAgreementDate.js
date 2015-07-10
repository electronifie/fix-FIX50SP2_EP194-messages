var invert = require('invert-obj');

function LegAgreementDate (legAgreementDate) {
  this.message = legAgreementDate;
}

LegAgreementDate.prototype.value = function () {
  return this.message;
};

LegAgreementDate.Tag = '2496';

LegAgreementDate.Type = 'LOCALMKTDATE';

module.exports = LegAgreementDate;