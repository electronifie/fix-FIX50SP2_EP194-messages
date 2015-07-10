var invert = require('invert-obj');

function NoLegComplexEventCreditEventQualifiers (noLegComplexEventCreditEventQualifiers) {
  this.message = noLegComplexEventCreditEventQualifiers;
}

NoLegComplexEventCreditEventQualifiers.prototype.value = function () {
  return this.message;
};

NoLegComplexEventCreditEventQualifiers.Tag = '41374';

NoLegComplexEventCreditEventQualifiers.Type = 'NUMINGROUP';

module.exports = NoLegComplexEventCreditEventQualifiers;