var invert = require('invert-obj');

function LegComplexEventCondition (legComplexEventCondition) {
  this.message = legComplexEventCondition;
}

LegComplexEventCondition.prototype.value = function () {
  return this.message;
};

LegComplexEventCondition.Tag = '2232';

LegComplexEventCondition.Type = 'INT';

module.exports = LegComplexEventCondition;