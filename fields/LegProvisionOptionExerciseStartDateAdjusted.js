var invert = require('invert-obj');

function LegProvisionOptionExerciseStartDateAdjusted (legProvisionOptionExerciseStartDateAdjusted) {
  this.message = legProvisionOptionExerciseStartDateAdjusted;
}

LegProvisionOptionExerciseStartDateAdjusted.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseStartDateAdjusted.Tag = '40487';

LegProvisionOptionExerciseStartDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegProvisionOptionExerciseStartDateAdjusted;