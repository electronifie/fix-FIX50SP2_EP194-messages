var invert = require('invert-obj');

function ComplexEventPriceBoundaryMethod (complexEventPriceBoundaryMethod) {
  this.message = complexEventPriceBoundaryMethod;
}

ComplexEventPriceBoundaryMethod.prototype.value = function () {
  return this.message;
};


ComplexEventPriceBoundaryMethod.Keys = {
  LESS_THAN_COMPLEXEVENTPRICE: '1',
  LESS_THAN_OR_EQUAL_TO_COMPLEXEVENTPRICE: '2',
  EQUAL_TO_COMPLEXEVENTPRICE: '3',
  GREATER_THAN_OR_EQUAL_TO_COMPLEXEVENTPRICE: '4',
  GREATER_THAN_COMPLEXEVENTPRICE: '5',
};

ComplexEventPriceBoundaryMethod.Tag = '1487';

ComplexEventPriceBoundaryMethod.Type = 'INT';

ComplexEventPriceBoundaryMethod.Values = invert(ComplexEventPriceBoundaryMethod.Keys);

module.exports = ComplexEventPriceBoundaryMethod;