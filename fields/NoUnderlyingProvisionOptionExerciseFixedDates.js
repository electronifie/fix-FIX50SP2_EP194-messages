var invert = require('invert-obj');

function NoUnderlyingProvisionOptionExerciseFixedDates (noUnderlyingProvisionOptionExerciseFixedDates) {
  this.message = noUnderlyingProvisionOptionExerciseFixedDates;
}

NoUnderlyingProvisionOptionExerciseFixedDates.prototype.value = function () {
  return this.message;
};

NoUnderlyingProvisionOptionExerciseFixedDates.Tag = '42112';

NoUnderlyingProvisionOptionExerciseFixedDates.Type = 'NUMINGROUP';

module.exports = NoUnderlyingProvisionOptionExerciseFixedDates;