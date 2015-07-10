var invert = require('invert-obj');

function NoComplexEventAveragingObservations (noComplexEventAveragingObservations) {
  this.message = noComplexEventAveragingObservations;
}

NoComplexEventAveragingObservations.prototype.value = function () {
  return this.message;
};

NoComplexEventAveragingObservations.Tag = '40994';

NoComplexEventAveragingObservations.Type = 'NUMINGROUP';

module.exports = NoComplexEventAveragingObservations;