var invert = require('invert-obj');

function NoUnderlyingComplexEventAveragingObservations (noUnderlyingComplexEventAveragingObservations) {
  this.message = noUnderlyingComplexEventAveragingObservations;
}

NoUnderlyingComplexEventAveragingObservations.prototype.value = function () {
  return this.message;
};

NoUnderlyingComplexEventAveragingObservations.Tag = '41713';

NoUnderlyingComplexEventAveragingObservations.Type = 'NUMINGROUP';

module.exports = NoUnderlyingComplexEventAveragingObservations;