var invert = require('invert-obj');

function NoUnderlyingComplexEventCreditEventQualifiers (noUnderlyingComplexEventCreditEventQualifiers) {
  this.message = noUnderlyingComplexEventCreditEventQualifiers;
}

NoUnderlyingComplexEventCreditEventQualifiers.prototype.value = function () {
  return this.message;
};

NoUnderlyingComplexEventCreditEventQualifiers.Tag = '41724';

NoUnderlyingComplexEventCreditEventQualifiers.Type = 'NUMINGROUP';

module.exports = NoUnderlyingComplexEventCreditEventQualifiers;