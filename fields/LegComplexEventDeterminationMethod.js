var invert = require('invert-obj');

function LegComplexEventDeterminationMethod (legComplexEventDeterminationMethod) {
  this.message = legComplexEventDeterminationMethod;
}

LegComplexEventDeterminationMethod.prototype.value = function () {
  return this.message;
};

LegComplexEventDeterminationMethod.Tag = '2237';

LegComplexEventDeterminationMethod.Type = 'STRING';

module.exports = LegComplexEventDeterminationMethod;