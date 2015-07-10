var invert = require('invert-obj');

function ProvisionOptionExerciseBoundsLastDateUnadjusted (provisionOptionExerciseBoundsLastDateUnadjusted) {
  this.message = provisionOptionExerciseBoundsLastDateUnadjusted;
}

ProvisionOptionExerciseBoundsLastDateUnadjusted.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseBoundsLastDateUnadjusted.Tag = '40137';

ProvisionOptionExerciseBoundsLastDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = ProvisionOptionExerciseBoundsLastDateUnadjusted;