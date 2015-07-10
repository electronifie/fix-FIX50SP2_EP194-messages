var NoUnderlyingComplexEventCreditEventSources = require('../fields/NoUnderlyingComplexEventCreditEventSources');
var UnderlyingComplexEventCreditEventSource = require('../fields/UnderlyingComplexEventCreditEventSource');

function UnderlyingComplexEventCreditEventSourceGrp (underlyingComplexEventCreditEventSourceGrp) {
  this.message = underlyingComplexEventCreditEventSourceGrp;
}

/* group */

/* field */
UnderlyingComplexEventCreditEventSourceGrp.prototype.underlyingComplexEventCreditEventSource = function () {
  return new UnderlyingComplexEventCreditEventSource(this.message.tags[UnderlyingComplexEventCreditEventSource.Tag]);
};

/* end group */

UnderlyingComplexEventCreditEventSourceGrp.Tag = '41748';

module.exports = UnderlyingComplexEventCreditEventSourceGrp;