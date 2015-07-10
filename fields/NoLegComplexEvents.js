var invert = require('invert-obj');

function NoLegComplexEvents (noLegComplexEvents) {
  this.message = noLegComplexEvents;
}

NoLegComplexEvents.prototype.value = function () {
  return this.message;
};

NoLegComplexEvents.Tag = '2218';

NoLegComplexEvents.Type = 'NUMINGROUP';

module.exports = NoLegComplexEvents;