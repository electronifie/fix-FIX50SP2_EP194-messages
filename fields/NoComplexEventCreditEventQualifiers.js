var invert = require('invert-obj');

function NoComplexEventCreditEventQualifiers (noComplexEventCreditEventQualifiers) {
  this.message = noComplexEventCreditEventQualifiers;
}

NoComplexEventCreditEventQualifiers.prototype.value = function () {
  return this.message;
};

NoComplexEventCreditEventQualifiers.Tag = '41005';

NoComplexEventCreditEventQualifiers.Type = 'NUMINGROUP';

module.exports = NoComplexEventCreditEventQualifiers;