var invert = require('invert-obj');

function LegComplexEventCreditEventsXIDRef (legComplexEventCreditEventsXidref) {
  this.message = legComplexEventCreditEventsXidref;
}

LegComplexEventCreditEventsXIDRef.prototype.value = function () {
  return this.message;
};

LegComplexEventCreditEventsXIDRef.Tag = '2242';

LegComplexEventCreditEventsXIDRef.Type = 'XIDREF';

module.exports = LegComplexEventCreditEventsXIDRef;