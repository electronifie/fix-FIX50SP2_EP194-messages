var invert = require('invert-obj');

function ProtectionTermEventQualifier (protectionTermEventQualifier) {
  this.message = protectionTermEventQualifier;
}

ProtectionTermEventQualifier.prototype.value = function () {
  return this.message;
};


ProtectionTermEventQualifier.Keys = {
  'RETRUCTURING_MULTIPLE_HOLDING_OBLIGATIONS': 'H',
  'RESTRUCTURING_MULTIPLE_CREDIT_EVENT_NOTICES': 'E',
  'FLOATING_RATE_INTEREST_SHORTFALL': 'C',
};

ProtectionTermEventQualifier.Tag = '40200';

ProtectionTermEventQualifier.Type = 'CHAR';

ProtectionTermEventQualifier.Values = invert(ProtectionTermEventQualifier.Keys);

module.exports = ProtectionTermEventQualifier;