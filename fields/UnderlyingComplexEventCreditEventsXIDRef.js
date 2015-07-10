var invert = require('invert-obj');

function UnderlyingComplexEventCreditEventsXIDRef (underlyingComplexEventCreditEventsXidref) {
  this.message = underlyingComplexEventCreditEventsXidref;
}

UnderlyingComplexEventCreditEventsXIDRef.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCreditEventsXIDRef.Tag = '2277';

UnderlyingComplexEventCreditEventsXIDRef.Type = 'XIDREF';

module.exports = UnderlyingComplexEventCreditEventsXIDRef;