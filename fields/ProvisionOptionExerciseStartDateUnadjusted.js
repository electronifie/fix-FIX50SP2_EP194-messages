var invert = require('invert-obj');

function ProvisionOptionExerciseStartDateUnadjusted (provisionOptionExerciseStartDateUnadjusted) {
  this.message = provisionOptionExerciseStartDateUnadjusted;
}

ProvisionOptionExerciseStartDateUnadjusted.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseStartDateUnadjusted.Tag = '40129';

ProvisionOptionExerciseStartDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = ProvisionOptionExerciseStartDateUnadjusted;