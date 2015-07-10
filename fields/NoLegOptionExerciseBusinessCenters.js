var invert = require('invert-obj');

function NoLegOptionExerciseBusinessCenters (noLegOptionExerciseBusinessCenters) {
  this.message = noLegOptionExerciseBusinessCenters;
}

NoLegOptionExerciseBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegOptionExerciseBusinessCenters.Tag = '41491';

NoLegOptionExerciseBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegOptionExerciseBusinessCenters;