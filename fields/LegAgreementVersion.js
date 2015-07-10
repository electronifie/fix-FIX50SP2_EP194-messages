var invert = require('invert-obj');

function LegAgreementVersion (legAgreementVersion) {
  this.message = legAgreementVersion;
}

LegAgreementVersion.prototype.value = function () {
  return this.message;
};

LegAgreementVersion.Tag = '2499';

LegAgreementVersion.Type = 'STRING';

module.exports = LegAgreementVersion;