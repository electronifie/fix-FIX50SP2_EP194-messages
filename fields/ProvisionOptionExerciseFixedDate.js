var invert = require('invert-obj');

function ProvisionOptionExerciseFixedDate (provisionOptionExerciseFixedDate) {
  this.message = provisionOptionExerciseFixedDate;
}

ProvisionOptionExerciseFixedDate.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseFixedDate.Tag = '40143';

ProvisionOptionExerciseFixedDate.Type = 'LOCALMKTDATE';

module.exports = ProvisionOptionExerciseFixedDate;