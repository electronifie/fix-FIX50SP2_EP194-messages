var NoUnderlyingProvisionOptionExerciseBusinessCenters = require('../fields/NoUnderlyingProvisionOptionExerciseBusinessCenters');
var UnderlyingProvisionOptionExerciseBusinessCenter = require('../fields/UnderlyingProvisionOptionExerciseBusinessCenter');

function UnderlyingProvisionOptionExerciseBusinessCenterGrp (underlyingProvisionOptionExerciseBusinessCenterGrp) {
  this.message = underlyingProvisionOptionExerciseBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingProvisionOptionExerciseBusinessCenterGrp.prototype.underlyingProvisionOptionExerciseBusinessCenter = function () {
  return new UnderlyingProvisionOptionExerciseBusinessCenter(this.message.tags[UnderlyingProvisionOptionExerciseBusinessCenter.Tag]);
};

/* end group */

UnderlyingProvisionOptionExerciseBusinessCenterGrp.Tag = '42184';

module.exports = UnderlyingProvisionOptionExerciseBusinessCenterGrp;