var invert = require('invert-obj');

function NoProvisionOptionExerciseBusinessCenters (noProvisionOptionExerciseBusinessCenters) {
  this.message = noProvisionOptionExerciseBusinessCenters;
}

NoProvisionOptionExerciseBusinessCenters.prototype.value = function () {
  return this.message;
};

NoProvisionOptionExerciseBusinessCenters.Tag = '40954';

NoProvisionOptionExerciseBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoProvisionOptionExerciseBusinessCenters;