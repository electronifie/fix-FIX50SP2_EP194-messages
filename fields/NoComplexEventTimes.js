var invert = require('invert-obj');

function NoComplexEventTimes (noComplexEventTimes) {
  this.message = noComplexEventTimes;
}

NoComplexEventTimes.prototype.value = function () {
  return this.message;
};

NoComplexEventTimes.Tag = '1494';

NoComplexEventTimes.Type = 'NUMINGROUP';

module.exports = NoComplexEventTimes;