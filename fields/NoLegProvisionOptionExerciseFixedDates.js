var invert = require('invert-obj');

function NoLegProvisionOptionExerciseFixedDates (noLegProvisionOptionExerciseFixedDates) {
  this.message = noLegProvisionOptionExerciseFixedDates;
}

NoLegProvisionOptionExerciseFixedDates.prototype.value = function () {
  return this.message;
};

NoLegProvisionOptionExerciseFixedDates.Tag = '40495';

NoLegProvisionOptionExerciseFixedDates.Type = 'NUMINGROUP';

module.exports = NoLegProvisionOptionExerciseFixedDates;