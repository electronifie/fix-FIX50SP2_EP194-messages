var invert = require('invert-obj');

function ComplexEventAveragingObservationNumber (complexEventAveragingObservationNumber) {
  this.message = complexEventAveragingObservationNumber;
}

ComplexEventAveragingObservationNumber.prototype.value = function () {
  return this.message;
};

ComplexEventAveragingObservationNumber.Tag = '40995';

ComplexEventAveragingObservationNumber.Type = 'INT';

module.exports = ComplexEventAveragingObservationNumber;