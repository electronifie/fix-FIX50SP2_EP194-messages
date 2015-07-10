var invert = require('invert-obj');

function NoLegProvisionOptionExerciseBusinessCenters (noLegProvisionOptionExerciseBusinessCenters) {
  this.message = noLegProvisionOptionExerciseBusinessCenters;
}

NoLegProvisionOptionExerciseBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegProvisionOptionExerciseBusinessCenters.Tag = '40936';

NoLegProvisionOptionExerciseBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegProvisionOptionExerciseBusinessCenters;