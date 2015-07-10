var NoLegOptionExerciseExpirationDateBusinessCenters = require('../fields/NoLegOptionExerciseExpirationDateBusinessCenters');
var LegOptionExerciseExpirationDateBusinessCenter = require('../fields/LegOptionExerciseExpirationDateBusinessCenter');

function LegOptionExerciseExpirationDateBusinessCenterGrp (legOptionExerciseExpirationDateBusinessCenterGrp) {
  this.message = legOptionExerciseExpirationDateBusinessCenterGrp;
}

/* group */

/* field */
LegOptionExerciseExpirationDateBusinessCenterGrp.prototype.legOptionExerciseExpirationDateBusinessCenter = function () {
  return new LegOptionExerciseExpirationDateBusinessCenter(this.message.tags[LegOptionExerciseExpirationDateBusinessCenter.Tag]);
};

/* end group */

LegOptionExerciseExpirationDateBusinessCenterGrp.Tag = '41515';

module.exports = LegOptionExerciseExpirationDateBusinessCenterGrp;