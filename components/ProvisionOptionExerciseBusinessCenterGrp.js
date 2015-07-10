var NoProvisionOptionExerciseBusinessCenters = require('../fields/NoProvisionOptionExerciseBusinessCenters');
var ProvisionOptionExerciseBusinessCenter = require('../fields/ProvisionOptionExerciseBusinessCenter');

function ProvisionOptionExerciseBusinessCenterGrp (provisionOptionExerciseBusinessCenterGrp) {
  this.message = provisionOptionExerciseBusinessCenterGrp;
}

/* group */

/* field */
ProvisionOptionExerciseBusinessCenterGrp.prototype.provisionOptionExerciseBusinessCenter = function () {
  return new ProvisionOptionExerciseBusinessCenter(this.message.tags[ProvisionOptionExerciseBusinessCenter.Tag]);
};

/* end group */

ProvisionOptionExerciseBusinessCenterGrp.Tag = '40954';

module.exports = ProvisionOptionExerciseBusinessCenterGrp;