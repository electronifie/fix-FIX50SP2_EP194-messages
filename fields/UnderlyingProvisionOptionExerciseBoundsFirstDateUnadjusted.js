var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseBoundsFirstDateUnadjusted (underlyingProvisionOptionExerciseBoundsFirstDateUnadjusted) {
  this.message = underlyingProvisionOptionExerciseBoundsFirstDateUnadjusted;
}

UnderlyingProvisionOptionExerciseBoundsFirstDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseBoundsFirstDateUnadjusted.Tag = '42127';

UnderlyingProvisionOptionExerciseBoundsFirstDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingProvisionOptionExerciseBoundsFirstDateUnadjusted;