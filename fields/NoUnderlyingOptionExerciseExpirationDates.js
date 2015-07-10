var invert = require('invert-obj');

function NoUnderlyingOptionExerciseExpirationDates (noUnderlyingOptionExerciseExpirationDates) {
  this.message = noUnderlyingOptionExerciseExpirationDates;
}

NoUnderlyingOptionExerciseExpirationDates.prototype.value = function () {
  return this.message;
};

NoUnderlyingOptionExerciseExpirationDates.Tag = '41856';

NoUnderlyingOptionExerciseExpirationDates.Type = 'NUMINGROUP';

module.exports = NoUnderlyingOptionExerciseExpirationDates;