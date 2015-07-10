var invert = require('invert-obj');

function LegProvisionOptionExerciseStartDateUnadjusted (legProvisionOptionExerciseStartDateUnadjusted) {
  this.message = legProvisionOptionExerciseStartDateUnadjusted;
}

LegProvisionOptionExerciseStartDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseStartDateUnadjusted.Tag = '40482';

LegProvisionOptionExerciseStartDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegProvisionOptionExerciseStartDateUnadjusted;