var NoUnderlyingProvisionOptionExerciseFixedDates = require('../fields/NoUnderlyingProvisionOptionExerciseFixedDates');
var UnderlyingProvisionOptionExerciseFixedDate = require('../fields/UnderlyingProvisionOptionExerciseFixedDate');
var UnderlyingProvisionOptionExerciseFixedDateType = require('../fields/UnderlyingProvisionOptionExerciseFixedDateType');

function UnderlyingProvisionOptionExerciseFixedDateGrp (underlyingProvisionOptionExerciseFixedDateGrp) {
  this.message = underlyingProvisionOptionExerciseFixedDateGrp;
}

/* group */

/* field */
UnderlyingProvisionOptionExerciseFixedDateGrp.prototype.underlyingProvisionOptionExerciseFixedDate = function () {
  return new UnderlyingProvisionOptionExerciseFixedDate(this.message.tags[UnderlyingProvisionOptionExerciseFixedDate.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseFixedDateGrp.prototype.underlyingProvisionOptionExerciseFixedDateType = function () {
  return new UnderlyingProvisionOptionExerciseFixedDateType(this.message.tags[UnderlyingProvisionOptionExerciseFixedDateType.Tag]);
};

/* end group */

UnderlyingProvisionOptionExerciseFixedDateGrp.Tag = '42112';

module.exports = UnderlyingProvisionOptionExerciseFixedDateGrp;