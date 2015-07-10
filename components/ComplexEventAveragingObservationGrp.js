var NoComplexEventAveragingObservations = require('../fields/NoComplexEventAveragingObservations');
var ComplexEventAveragingObservationNumber = require('../fields/ComplexEventAveragingObservationNumber');
var ComplexEventAveragingWeight = require('../fields/ComplexEventAveragingWeight');

function ComplexEventAveragingObservationGrp (complexEventAveragingObservationGrp) {
  this.message = complexEventAveragingObservationGrp;
}

/* group */

/* field */
ComplexEventAveragingObservationGrp.prototype.complexEventAveragingObservationNumber = function () {
  return new ComplexEventAveragingObservationNumber(this.message.tags[ComplexEventAveragingObservationNumber.Tag]);
};

/* field */
ComplexEventAveragingObservationGrp.prototype.complexEventAveragingWeight = function () {
  return new ComplexEventAveragingWeight(this.message.tags[ComplexEventAveragingWeight.Tag]);
};

/* end group */

ComplexEventAveragingObservationGrp.Tag = '40994';

module.exports = ComplexEventAveragingObservationGrp;