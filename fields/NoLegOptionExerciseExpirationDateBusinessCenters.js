var invert = require('invert-obj');

function NoLegOptionExerciseExpirationDateBusinessCenters (noLegOptionExerciseExpirationDateBusinessCenters) {
  this.message = noLegOptionExerciseExpirationDateBusinessCenters;
}

NoLegOptionExerciseExpirationDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegOptionExerciseExpirationDateBusinessCenters.Tag = '41515';

NoLegOptionExerciseExpirationDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegOptionExerciseExpirationDateBusinessCenters;