var invert = require('invert-obj');

function ProvisionOptionExerciseStartDateRelativeTo (provisionOptionExerciseStartDateRelativeTo) {
  this.message = provisionOptionExerciseStartDateRelativeTo;
}

ProvisionOptionExerciseStartDateRelativeTo.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseStartDateRelativeTo.Tag = '40130';

ProvisionOptionExerciseStartDateRelativeTo.Type = 'INT';

module.exports = ProvisionOptionExerciseStartDateRelativeTo;