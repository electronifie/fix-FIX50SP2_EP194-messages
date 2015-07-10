var invert = require('invert-obj');

function NoOptionExerciseExpirationDates (noOptionExerciseExpirationDates) {
  this.message = noOptionExerciseExpirationDates;
}

NoOptionExerciseExpirationDates.prototype.value = function () {
  return this.message;
};

NoOptionExerciseExpirationDates.Tag = '41152';

NoOptionExerciseExpirationDates.Type = 'NUMINGROUP';

module.exports = NoOptionExerciseExpirationDates;