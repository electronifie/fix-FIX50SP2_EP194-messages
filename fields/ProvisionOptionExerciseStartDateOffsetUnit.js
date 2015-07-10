var invert = require('invert-obj');

function ProvisionOptionExerciseStartDateOffsetUnit (provisionOptionExerciseStartDateOffsetUnit) {
  this.message = provisionOptionExerciseStartDateOffsetUnit;
}

ProvisionOptionExerciseStartDateOffsetUnit.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseStartDateOffsetUnit.Tag = '40132';

ProvisionOptionExerciseStartDateOffsetUnit.Type = 'STRING';

module.exports = ProvisionOptionExerciseStartDateOffsetUnit;