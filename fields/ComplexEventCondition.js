var invert = require('invert-obj');

function ComplexEventCondition (complexEventCondition) {
  this.message = complexEventCondition;
}

ComplexEventCondition.prototype.value = function () {
  return this.message;
};


ComplexEventCondition.Keys = {
  'AND': '1',
  'OR': '2',
};

ComplexEventCondition.Tag = '1490';

ComplexEventCondition.Type = 'INT';

ComplexEventCondition.Values = invert(ComplexEventCondition.Keys);

module.exports = ComplexEventCondition;