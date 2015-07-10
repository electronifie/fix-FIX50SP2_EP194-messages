var invert = require('invert-obj');

function LegProvisionOptionExerciseBoundsLastDateUnadjusted (legProvisionOptionExerciseBoundsLastDateUnadjusted) {
  this.message = legProvisionOptionExerciseBoundsLastDateUnadjusted;
}

LegProvisionOptionExerciseBoundsLastDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseBoundsLastDateUnadjusted.Tag = '40490';

LegProvisionOptionExerciseBoundsLastDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegProvisionOptionExerciseBoundsLastDateUnadjusted;