var invert = require('invert-obj');

function LegComplexEventCreditEventQualifier (legComplexEventCreditEventQualifier) {
  this.message = legComplexEventCreditEventQualifier;
}

LegComplexEventCreditEventQualifier.prototype.value = function () {
  return this.message;
};

LegComplexEventCreditEventQualifier.Tag = '41375';

LegComplexEventCreditEventQualifier.Type = 'CHAR';

module.exports = LegComplexEventCreditEventQualifier;