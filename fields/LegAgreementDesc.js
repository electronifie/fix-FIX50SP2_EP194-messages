var invert = require('invert-obj');

function LegAgreementDesc (legAgreementDesc) {
  this.message = legAgreementDesc;
}

LegAgreementDesc.prototype.value = function () {
  return this.message;
};

LegAgreementDesc.Tag = '2497';

LegAgreementDesc.Type = 'STRING';

module.exports = LegAgreementDesc;