var invert = require('invert-obj');

function VerificationMethod (verificationMethod) {
  this.message = verificationMethod;
}

VerificationMethod.prototype.value = function () {
  return this.message;
};


VerificationMethod.Keys = {
  'NON_ELECTRONIC': '0',
  'ELECTRONIC': '1',
};

VerificationMethod.Tag = '1931';

VerificationMethod.Type = 'INT';

VerificationMethod.Values = invert(VerificationMethod.Keys);

module.exports = VerificationMethod;