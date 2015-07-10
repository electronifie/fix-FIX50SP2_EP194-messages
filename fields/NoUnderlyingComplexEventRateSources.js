var invert = require('invert-obj');

function NoUnderlyingComplexEventRateSources (noUnderlyingComplexEventRateSources) {
  this.message = noUnderlyingComplexEventRateSources;
}

NoUnderlyingComplexEventRateSources.prototype.value = function () {
  return this.message;
};

NoUnderlyingComplexEventRateSources.Tag = '41732';

NoUnderlyingComplexEventRateSources.Type = 'NUMINGROUP';

module.exports = NoUnderlyingComplexEventRateSources;