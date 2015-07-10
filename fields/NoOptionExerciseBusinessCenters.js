var invert = require('invert-obj');

function NoOptionExerciseBusinessCenters (noOptionExerciseBusinessCenters) {
  this.message = noOptionExerciseBusinessCenters;
}

NoOptionExerciseBusinessCenters.prototype.value = function () {
  return this.message;
};

NoOptionExerciseBusinessCenters.Tag = '41116';

NoOptionExerciseBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoOptionExerciseBusinessCenters;