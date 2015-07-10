var invert = require('invert-obj');

function NoLegOptionExerciseExpirationDates (noLegOptionExerciseExpirationDates) {
  this.message = noLegOptionExerciseExpirationDates;
}

NoLegOptionExerciseExpirationDates.prototype.value = function () {
  return this.message;
};

NoLegOptionExerciseExpirationDates.Tag = '41527';

NoLegOptionExerciseExpirationDates.Type = 'NUMINGROUP';

module.exports = NoLegOptionExerciseExpirationDates;