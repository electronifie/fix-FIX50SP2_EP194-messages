var invert = require('invert-obj');

function ComplexEventDeterminationMethod (complexEventDeterminationMethod) {
  this.message = complexEventDeterminationMethod;
}

ComplexEventDeterminationMethod.prototype.value = function () {
  return this.message;
};

ComplexEventDeterminationMethod.Tag = '2128';

ComplexEventDeterminationMethod.Type = 'STRING';

module.exports = ComplexEventDeterminationMethod;