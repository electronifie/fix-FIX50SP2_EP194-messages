var invert = require('invert-obj');

function NoUnderlyingComplexEvents (noUnderlyingComplexEvents) {
  this.message = noUnderlyingComplexEvents;
}

NoUnderlyingComplexEvents.prototype.value = function () {
  return this.message;
};

NoUnderlyingComplexEvents.Tag = '2045';

NoUnderlyingComplexEvents.Type = 'NUMINGROUP';

module.exports = NoUnderlyingComplexEvents;