var invert = require('invert-obj');

function UnderlyingComplexEventCreditEventValue (underlyingComplexEventCreditEventValue) {
  this.message = underlyingComplexEventCreditEventValue;
}

UnderlyingComplexEventCreditEventValue.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCreditEventValue.Tag = '41718';

UnderlyingComplexEventCreditEventValue.Type = 'STRING';

module.exports = UnderlyingComplexEventCreditEventValue;