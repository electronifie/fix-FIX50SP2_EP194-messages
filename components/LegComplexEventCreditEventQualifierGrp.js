var NoLegComplexEventCreditEventQualifiers = require('../fields/NoLegComplexEventCreditEventQualifiers');
var LegComplexEventCreditEventQualifier = require('../fields/LegComplexEventCreditEventQualifier');

function LegComplexEventCreditEventQualifierGrp (legComplexEventCreditEventQualifierGrp) {
  this.message = legComplexEventCreditEventQualifierGrp;
}

/* group */

/* field */
LegComplexEventCreditEventQualifierGrp.prototype.legComplexEventCreditEventQualifier = function () {
  return new LegComplexEventCreditEventQualifier(this.message.tags[LegComplexEventCreditEventQualifier.Tag]);
};

/* end group */

LegComplexEventCreditEventQualifierGrp.Tag = '41374';

module.exports = LegComplexEventCreditEventQualifierGrp;