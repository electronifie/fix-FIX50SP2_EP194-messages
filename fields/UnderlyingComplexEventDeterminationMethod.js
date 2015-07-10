var invert = require('invert-obj');

function UnderlyingComplexEventDeterminationMethod (underlyingComplexEventDeterminationMethod) {
  this.message = underlyingComplexEventDeterminationMethod;
}

UnderlyingComplexEventDeterminationMethod.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventDeterminationMethod.Tag = '2272';

UnderlyingComplexEventDeterminationMethod.Type = 'STRING';

module.exports = UnderlyingComplexEventDeterminationMethod;