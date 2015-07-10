var invert = require('invert-obj');

function UnderlyingComplexEventAveragingObservationNumber (underlyingComplexEventAveragingObservationNumber) {
  this.message = underlyingComplexEventAveragingObservationNumber;
}

UnderlyingComplexEventAveragingObservationNumber.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventAveragingObservationNumber.Tag = '41714';

UnderlyingComplexEventAveragingObservationNumber.Type = 'INT';

module.exports = UnderlyingComplexEventAveragingObservationNumber;