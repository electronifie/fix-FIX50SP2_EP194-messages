var invert = require('invert-obj');

function UnderlyingComplexEventCondition (underlyingComplexEventCondition) {
  this.message = underlyingComplexEventCondition;
}

UnderlyingComplexEventCondition.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCondition.Tag = '2052';

UnderlyingComplexEventCondition.Type = 'INT';

module.exports = UnderlyingComplexEventCondition;