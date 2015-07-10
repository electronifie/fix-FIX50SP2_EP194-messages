var NoLegProvisionOptionExerciseFixedDates = require('../fields/NoLegProvisionOptionExerciseFixedDates');
var LegProvisionOptionExerciseFixedDate = require('../fields/LegProvisionOptionExerciseFixedDate');
var LegProvisionOptionExerciseFixedDateType = require('../fields/LegProvisionOptionExerciseFixedDateType');

function LegProvisionOptionExerciseFixedDateGrp (legProvisionOptionExerciseFixedDateGrp) {
  this.message = legProvisionOptionExerciseFixedDateGrp;
}

/* group */

/* field */
LegProvisionOptionExerciseFixedDateGrp.prototype.legProvisionOptionExerciseFixedDate = function () {
  return new LegProvisionOptionExerciseFixedDate(this.message.tags[LegProvisionOptionExerciseFixedDate.Tag]);
};

/* field */
LegProvisionOptionExerciseFixedDateGrp.prototype.legProvisionOptionExerciseFixedDateType = function () {
  return new LegProvisionOptionExerciseFixedDateType(this.message.tags[LegProvisionOptionExerciseFixedDateType.Tag]);
};

/* end group */

LegProvisionOptionExerciseFixedDateGrp.Tag = '40495';

module.exports = LegProvisionOptionExerciseFixedDateGrp;