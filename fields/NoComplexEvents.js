var invert = require('invert-obj');

function NoComplexEvents (noComplexEvents) {
  this.message = noComplexEvents;
}

NoComplexEvents.prototype.value = function () {
  return this.message;
};

NoComplexEvents.Tag = '1483';

NoComplexEvents.Type = 'NUMINGROUP';

module.exports = NoComplexEvents;