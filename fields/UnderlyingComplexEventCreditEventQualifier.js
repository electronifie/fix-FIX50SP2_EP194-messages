var invert = require('invert-obj');

function UnderlyingComplexEventCreditEventQualifier (underlyingComplexEventCreditEventQualifier) {
  this.message = underlyingComplexEventCreditEventQualifier;
}

UnderlyingComplexEventCreditEventQualifier.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCreditEventQualifier.Tag = '41725';

UnderlyingComplexEventCreditEventQualifier.Type = 'CHAR';

module.exports = UnderlyingComplexEventCreditEventQualifier;