var NoLegComplexEventAveragingObservations = require('../fields/NoLegComplexEventAveragingObservations');
var LegComplexEventAveragingObservationNumber = require('../fields/LegComplexEventAveragingObservationNumber');
var LegComplexEventAveragingWeight = require('../fields/LegComplexEventAveragingWeight');

function LegComplexEventAveragingObservationGrp (legComplexEventAveragingObservationGrp) {
  this.message = legComplexEventAveragingObservationGrp;
}

/* group */

/* field */
LegComplexEventAveragingObservationGrp.prototype.legComplexEventAveragingObservationNumber = function () {
  return new LegComplexEventAveragingObservationNumber(this.message.tags[LegComplexEventAveragingObservationNumber.Tag]);
};

/* field */
LegComplexEventAveragingObservationGrp.prototype.legComplexEventAveragingWeight = function () {
  return new LegComplexEventAveragingWeight(this.message.tags[LegComplexEventAveragingWeight.Tag]);
};

/* end group */

LegComplexEventAveragingObservationGrp.Tag = '41363';

module.exports = LegComplexEventAveragingObservationGrp;