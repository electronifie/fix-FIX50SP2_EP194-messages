var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseStartDateUnadjusted (underlyingProvisionOptionExerciseStartDateUnadjusted) {
  this.message = underlyingProvisionOptionExerciseStartDateUnadjusted;
}

UnderlyingProvisionOptionExerciseStartDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseStartDateUnadjusted.Tag = '42120';

UnderlyingProvisionOptionExerciseStartDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingProvisionOptionExerciseStartDateUnadjusted;