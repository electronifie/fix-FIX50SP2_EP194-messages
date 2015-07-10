var NoUnderlyingComplexEventAveragingObservations = require('../fields/NoUnderlyingComplexEventAveragingObservations');
var UnderlyingComplexEventAveragingObservationNumber = require('../fields/UnderlyingComplexEventAveragingObservationNumber');
var UnderlyingComplexEventAveragingWeight = require('../fields/UnderlyingComplexEventAveragingWeight');

function UnderlyingComplexEventAveragingObservationGrp (underlyingComplexEventAveragingObservationGrp) {
  this.message = underlyingComplexEventAveragingObservationGrp;
}

/* group */

/* field */
UnderlyingComplexEventAveragingObservationGrp.prototype.underlyingComplexEventAveragingObservationNumber = function () {
  return new UnderlyingComplexEventAveragingObservationNumber(this.message.tags[UnderlyingComplexEventAveragingObservationNumber.Tag]);
};

/* field */
UnderlyingComplexEventAveragingObservationGrp.prototype.underlyingComplexEventAveragingWeight = function () {
  return new UnderlyingComplexEventAveragingWeight(this.message.tags[UnderlyingComplexEventAveragingWeight.Tag]);
};

/* end group */

UnderlyingComplexEventAveragingObservationGrp.Tag = '41713';

module.exports = UnderlyingComplexEventAveragingObservationGrp;