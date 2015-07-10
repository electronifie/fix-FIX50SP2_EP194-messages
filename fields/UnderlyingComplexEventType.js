var invert = require('invert-obj');

function UnderlyingComplexEventType (underlyingComplexEventType) {
  this.message = underlyingComplexEventType;
}

UnderlyingComplexEventType.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventType.Tag = '2046';

UnderlyingComplexEventType.Type = 'INT';

module.exports = UnderlyingComplexEventType;