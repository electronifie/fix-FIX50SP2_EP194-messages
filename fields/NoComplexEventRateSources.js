var invert = require('invert-obj');

function NoComplexEventRateSources (noComplexEventRateSources) {
  this.message = noComplexEventRateSources;
}

NoComplexEventRateSources.prototype.value = function () {
  return this.message;
};

NoComplexEventRateSources.Tag = '41013';

NoComplexEventRateSources.Type = 'NUMINGROUP';

module.exports = NoComplexEventRateSources;