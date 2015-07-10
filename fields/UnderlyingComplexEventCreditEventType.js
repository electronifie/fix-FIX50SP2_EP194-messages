var invert = require('invert-obj');

function UnderlyingComplexEventCreditEventType (underlyingComplexEventCreditEventType) {
  this.message = underlyingComplexEventCreditEventType;
}

UnderlyingComplexEventCreditEventType.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCreditEventType.Tag = '41717';

UnderlyingComplexEventCreditEventType.Type = 'STRING';

module.exports = UnderlyingComplexEventCreditEventType;