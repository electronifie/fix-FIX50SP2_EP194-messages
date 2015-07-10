var NoUnderlyingComplexEventCreditEventQualifiers = require('../fields/NoUnderlyingComplexEventCreditEventQualifiers');
var UnderlyingComplexEventCreditEventQualifier = require('../fields/UnderlyingComplexEventCreditEventQualifier');

function UnderlyingComplexEventCreditEventQualifierGrp (underlyingComplexEventCreditEventQualifierGrp) {
  this.message = underlyingComplexEventCreditEventQualifierGrp;
}

/* group */

/* field */
UnderlyingComplexEventCreditEventQualifierGrp.prototype.underlyingComplexEventCreditEventQualifier = function () {
  return new UnderlyingComplexEventCreditEventQualifier(this.message.tags[UnderlyingComplexEventCreditEventQualifier.Tag]);
};

/* end group */

UnderlyingComplexEventCreditEventQualifierGrp.Tag = '41724';

module.exports = UnderlyingComplexEventCreditEventQualifierGrp;