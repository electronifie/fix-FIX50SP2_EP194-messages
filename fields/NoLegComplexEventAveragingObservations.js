var invert = require('invert-obj');

function NoLegComplexEventAveragingObservations (noLegComplexEventAveragingObservations) {
  this.message = noLegComplexEventAveragingObservations;
}

NoLegComplexEventAveragingObservations.prototype.value = function () {
  return this.message;
};

NoLegComplexEventAveragingObservations.Tag = '41363';

NoLegComplexEventAveragingObservations.Type = 'NUMINGROUP';

module.exports = NoLegComplexEventAveragingObservations;