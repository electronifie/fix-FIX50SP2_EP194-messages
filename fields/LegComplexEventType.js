var invert = require('invert-obj');

function LegComplexEventType (legComplexEventType) {
  this.message = legComplexEventType;
}

LegComplexEventType.prototype.value = function () {
  return this.message;
};

LegComplexEventType.Tag = '2219';

LegComplexEventType.Type = 'INT';

module.exports = LegComplexEventType;