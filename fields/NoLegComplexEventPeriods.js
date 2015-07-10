var invert = require('invert-obj');

function NoLegComplexEventPeriods (noLegComplexEventPeriods) {
  this.message = noLegComplexEventPeriods;
}

NoLegComplexEventPeriods.prototype.value = function () {
  return this.message;
};

NoLegComplexEventPeriods.Tag = '41379';

NoLegComplexEventPeriods.Type = 'NUMINGROUP';

module.exports = NoLegComplexEventPeriods;