var invert = require('invert-obj');

function NoProvisionOptionExerciseFixedDates (noProvisionOptionExerciseFixedDates) {
  this.message = noProvisionOptionExerciseFixedDates;
}

NoProvisionOptionExerciseFixedDates.prototype.value = function () {
  return this.message;
};

NoProvisionOptionExerciseFixedDates.Tag = '40142';

NoProvisionOptionExerciseFixedDates.Type = 'NUMINGROUP';

module.exports = NoProvisionOptionExerciseFixedDates;