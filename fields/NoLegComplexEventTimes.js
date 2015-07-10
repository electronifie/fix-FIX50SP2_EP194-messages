var invert = require('invert-obj');

function NoLegComplexEventTimes (noLegComplexEventTimes) {
  this.message = noLegComplexEventTimes;
}

NoLegComplexEventTimes.prototype.value = function () {
  return this.message;
};

NoLegComplexEventTimes.Tag = '2253';

NoLegComplexEventTimes.Type = 'NUMINGROUP';

module.exports = NoLegComplexEventTimes;