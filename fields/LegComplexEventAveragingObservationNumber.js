var invert = require('invert-obj');

function LegComplexEventAveragingObservationNumber (legComplexEventAveragingObservationNumber) {
  this.message = legComplexEventAveragingObservationNumber;
}

LegComplexEventAveragingObservationNumber.prototype.value = function () {
  return this.message;
};

LegComplexEventAveragingObservationNumber.Tag = '41364';

LegComplexEventAveragingObservationNumber.Type = 'INT';

module.exports = LegComplexEventAveragingObservationNumber;