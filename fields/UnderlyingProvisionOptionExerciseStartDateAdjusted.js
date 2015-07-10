var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseStartDateAdjusted (underlyingProvisionOptionExerciseStartDateAdjusted) {
  this.message = underlyingProvisionOptionExerciseStartDateAdjusted;
}

UnderlyingProvisionOptionExerciseStartDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseStartDateAdjusted.Tag = '42125';

UnderlyingProvisionOptionExerciseStartDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingProvisionOptionExerciseStartDateAdjusted;