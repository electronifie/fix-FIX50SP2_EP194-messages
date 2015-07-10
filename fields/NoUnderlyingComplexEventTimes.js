var invert = require('invert-obj');

function NoUnderlyingComplexEventTimes (noUnderlyingComplexEventTimes) {
  this.message = noUnderlyingComplexEventTimes;
}

NoUnderlyingComplexEventTimes.prototype.value = function () {
  return this.message;
};

NoUnderlyingComplexEventTimes.Tag = '2056';

NoUnderlyingComplexEventTimes.Type = 'NUMINGROUP';

module.exports = NoUnderlyingComplexEventTimes;