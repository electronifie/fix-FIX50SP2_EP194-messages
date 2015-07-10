var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseBoundsLastDateUnadjusted (underlyingProvisionOptionExerciseBoundsLastDateUnadjusted) {
  this.message = underlyingProvisionOptionExerciseBoundsLastDateUnadjusted;
}

UnderlyingProvisionOptionExerciseBoundsLastDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseBoundsLastDateUnadjusted.Tag = '42128';

UnderlyingProvisionOptionExerciseBoundsLastDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingProvisionOptionExerciseBoundsLastDateUnadjusted;