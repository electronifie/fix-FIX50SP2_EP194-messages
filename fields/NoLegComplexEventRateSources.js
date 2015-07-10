var invert = require('invert-obj');

function NoLegComplexEventRateSources (noLegComplexEventRateSources) {
  this.message = noLegComplexEventRateSources;
}

NoLegComplexEventRateSources.prototype.value = function () {
  return this.message;
};

NoLegComplexEventRateSources.Tag = '41382';

NoLegComplexEventRateSources.Type = 'NUMINGROUP';

module.exports = NoLegComplexEventRateSources;