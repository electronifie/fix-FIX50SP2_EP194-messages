var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseFixedDate (underlyingProvisionOptionExerciseFixedDate) {
  this.message = underlyingProvisionOptionExerciseFixedDate;
}

UnderlyingProvisionOptionExerciseFixedDate.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseFixedDate.Tag = '42113';

UnderlyingProvisionOptionExerciseFixedDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingProvisionOptionExerciseFixedDate;