var NoLegProvisionOptionExerciseBusinessCenters = require('../fields/NoLegProvisionOptionExerciseBusinessCenters');
var LegProvisionOptionExerciseBusinessCenter = require('../fields/LegProvisionOptionExerciseBusinessCenter');

function LegProvisionOptionExerciseBusinessCenterGrp (legProvisionOptionExerciseBusinessCenterGrp) {
  this.message = legProvisionOptionExerciseBusinessCenterGrp;
}

/* group */

/* field */
LegProvisionOptionExerciseBusinessCenterGrp.prototype.legProvisionOptionExerciseBusinessCenter = function () {
  return new LegProvisionOptionExerciseBusinessCenter(this.message.tags[LegProvisionOptionExerciseBusinessCenter.Tag]);
};

/* end group */

LegProvisionOptionExerciseBusinessCenterGrp.Tag = '40936';

module.exports = LegProvisionOptionExerciseBusinessCenterGrp;