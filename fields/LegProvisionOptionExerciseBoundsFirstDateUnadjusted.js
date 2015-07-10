var invert = require('invert-obj');

function LegProvisionOptionExerciseBoundsFirstDateUnadjusted (legProvisionOptionExerciseBoundsFirstDateUnadjusted) {
  this.message = legProvisionOptionExerciseBoundsFirstDateUnadjusted;
}

LegProvisionOptionExerciseBoundsFirstDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseBoundsFirstDateUnadjusted.Tag = '40489';

LegProvisionOptionExerciseBoundsFirstDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegProvisionOptionExerciseBoundsFirstDateUnadjusted;