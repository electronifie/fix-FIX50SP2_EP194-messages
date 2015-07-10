var NoUnderlyingOptionExerciseExpirationDateBusinessCenters = require('../fields/NoUnderlyingOptionExerciseExpirationDateBusinessCenters');
var UnderlyingOptionExerciseExpirationDateBusinessCenter = require('../fields/UnderlyingOptionExerciseExpirationDateBusinessCenter');

function UnderlyingOptionExerciseExpirationDateBusinessCenterGrp (underlyingOptionExerciseExpirationDateBusinessCenterGrp) {
  this.message = underlyingOptionExerciseExpirationDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingOptionExerciseExpirationDateBusinessCenterGrp.prototype.underlyingOptionExerciseExpirationDateBusinessCenter = function () {
  return new UnderlyingOptionExerciseExpirationDateBusinessCenter(this.message.tags[UnderlyingOptionExerciseExpirationDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingOptionExerciseExpirationDateBusinessCenterGrp.Tag = '41844';

module.exports = UnderlyingOptionExerciseExpirationDateBusinessCenterGrp;