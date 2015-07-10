var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseStartDateOffsetUnit (underlyingProvisionOptionExerciseStartDateOffsetUnit) {
  this.message = underlyingProvisionOptionExerciseStartDateOffsetUnit;
}

UnderlyingProvisionOptionExerciseStartDateOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseStartDateOffsetUnit.Tag = '42123';

UnderlyingProvisionOptionExerciseStartDateOffsetUnit.Type = 'STRING';

module.exports = UnderlyingProvisionOptionExerciseStartDateOffsetUnit;