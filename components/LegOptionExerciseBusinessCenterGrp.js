var NoLegOptionExerciseBusinessCenters = require('../fields/NoLegOptionExerciseBusinessCenters');
var LegOptionExerciseBusinessCenter = require('../fields/LegOptionExerciseBusinessCenter');

function LegOptionExerciseBusinessCenterGrp (legOptionExerciseBusinessCenterGrp) {
  this.message = legOptionExerciseBusinessCenterGrp;
}

/* group */

/* field */
LegOptionExerciseBusinessCenterGrp.prototype.legOptionExerciseBusinessCenter = function () {
  return new LegOptionExerciseBusinessCenter(this.message.tags[LegOptionExerciseBusinessCenter.Tag]);
};

/* end group */

LegOptionExerciseBusinessCenterGrp.Tag = '41491';

module.exports = LegOptionExerciseBusinessCenterGrp;