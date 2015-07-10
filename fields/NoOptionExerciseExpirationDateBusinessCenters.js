var invert = require('invert-obj');

function NoOptionExerciseExpirationDateBusinessCenters (noOptionExerciseExpirationDateBusinessCenters) {
  this.message = noOptionExerciseExpirationDateBusinessCenters;
}

NoOptionExerciseExpirationDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoOptionExerciseExpirationDateBusinessCenters.Tag = '41140';

NoOptionExerciseExpirationDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoOptionExerciseExpirationDateBusinessCenters;