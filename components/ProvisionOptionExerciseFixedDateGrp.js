var NoProvisionOptionExerciseFixedDates = require('../fields/NoProvisionOptionExerciseFixedDates');
var ProvisionOptionExerciseFixedDate = require('../fields/ProvisionOptionExerciseFixedDate');
var ProvisionOptionExerciseFixedDateType = require('../fields/ProvisionOptionExerciseFixedDateType');

function ProvisionOptionExerciseFixedDateGrp (provisionOptionExerciseFixedDateGrp) {
  this.message = provisionOptionExerciseFixedDateGrp;
}

/* group */

/* field */
ProvisionOptionExerciseFixedDateGrp.prototype.provisionOptionExerciseFixedDate = function () {
  return new ProvisionOptionExerciseFixedDate(this.message.tags[ProvisionOptionExerciseFixedDate.Tag]);
};

/* field */
ProvisionOptionExerciseFixedDateGrp.prototype.provisionOptionExerciseFixedDateType = function () {
  return new ProvisionOptionExerciseFixedDateType(this.message.tags[ProvisionOptionExerciseFixedDateType.Tag]);
};

/* end group */

ProvisionOptionExerciseFixedDateGrp.Tag = '40142';

module.exports = ProvisionOptionExerciseFixedDateGrp;