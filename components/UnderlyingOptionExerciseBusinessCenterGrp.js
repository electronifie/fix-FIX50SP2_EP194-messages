var NoUnderlyingOptionExerciseBusinessCenters = require('../fields/NoUnderlyingOptionExerciseBusinessCenters');
var UnderlyingOptionExerciseBusinessCenter = require('../fields/UnderlyingOptionExerciseBusinessCenter');

function UnderlyingOptionExerciseBusinessCenterGrp (underlyingOptionExerciseBusinessCenterGrp) {
  this.message = underlyingOptionExerciseBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingOptionExerciseBusinessCenterGrp.prototype.underlyingOptionExerciseBusinessCenter = function () {
  return new UnderlyingOptionExerciseBusinessCenter(this.message.tags[UnderlyingOptionExerciseBusinessCenter.Tag]);
};

/* end group */

UnderlyingOptionExerciseBusinessCenterGrp.Tag = '41820';

module.exports = UnderlyingOptionExerciseBusinessCenterGrp;