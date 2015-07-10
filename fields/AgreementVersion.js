var invert = require('invert-obj');

function AgreementVersion (agreementVersion) {
  this.message = agreementVersion;
}

AgreementVersion.prototype.value = function () {
  return this.message;
};

AgreementVersion.Tag = '1961';

AgreementVersion.Type = 'STRING';

module.exports = AgreementVersion;