var NoComplexEventCreditEventSources = require('../fields/NoComplexEventCreditEventSources');
var ComplexEventCreditEventSource = require('../fields/ComplexEventCreditEventSource');

function ComplexEventCreditEventSourceGrp (complexEventCreditEventSourceGrp) {
  this.message = complexEventCreditEventSourceGrp;
}

/* group */

/* field */
ComplexEventCreditEventSourceGrp.prototype.complexEventCreditEventSource = function () {
  return new ComplexEventCreditEventSource(this.message.tags[ComplexEventCreditEventSource.Tag]);
};

/* end group */

ComplexEventCreditEventSourceGrp.Tag = '41029';

module.exports = ComplexEventCreditEventSourceGrp;