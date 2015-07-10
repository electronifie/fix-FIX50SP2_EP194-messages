var NoComplexEventCreditEventQualifiers = require('../fields/NoComplexEventCreditEventQualifiers');
var ComplexEventCreditEventQualifier = require('../fields/ComplexEventCreditEventQualifier');

function ComplexEventCreditEventQualifierGrp (complexEventCreditEventQualifierGrp) {
  this.message = complexEventCreditEventQualifierGrp;
}

/* group */

/* field */
ComplexEventCreditEventQualifierGrp.prototype.complexEventCreditEventQualifier = function () {
  return new ComplexEventCreditEventQualifier(this.message.tags[ComplexEventCreditEventQualifier.Tag]);
};

/* end group */

ComplexEventCreditEventQualifierGrp.Tag = '41005';

module.exports = ComplexEventCreditEventQualifierGrp;