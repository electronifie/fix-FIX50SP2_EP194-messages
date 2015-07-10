var invert = require('invert-obj');

function ProvisionOptionExerciseBoundsFirstDateUnadjusted (provisionOptionExerciseBoundsFirstDateUnadjusted) {
  this.message = provisionOptionExerciseBoundsFirstDateUnadjusted;
}

ProvisionOptionExerciseBoundsFirstDateUnadjusted.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseBoundsFirstDateUnadjusted.Tag = '40136';

ProvisionOptionExerciseBoundsFirstDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = ProvisionOptionExerciseBoundsFirstDateUnadjusted;