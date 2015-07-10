var invert = require('invert-obj');

function LegProvisionOptionExerciseStartDateOffsetUnit (legProvisionOptionExerciseStartDateOffsetUnit) {
  this.message = legProvisionOptionExerciseStartDateOffsetUnit;
}

LegProvisionOptionExerciseStartDateOffsetUnit.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseStartDateOffsetUnit.Tag = '40485';

LegProvisionOptionExerciseStartDateOffsetUnit.Type = 'STRING';

module.exports = LegProvisionOptionExerciseStartDateOffsetUnit;