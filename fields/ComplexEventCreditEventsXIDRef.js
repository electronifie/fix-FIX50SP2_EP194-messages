var invert = require('invert-obj');

function ComplexEventCreditEventsXIDRef (complexEventCreditEventsXidref) {
  this.message = complexEventCreditEventsXidref;
}

ComplexEventCreditEventsXIDRef.prototype.value = function () {
  return this.message;
};

ComplexEventCreditEventsXIDRef.Tag = '2133';

ComplexEventCreditEventsXIDRef.Type = 'XIDREF';

module.exports = ComplexEventCreditEventsXIDRef;