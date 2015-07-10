var invert = require('invert-obj');

function NoOptionExerciseDates (noOptionExerciseDates) {
  this.message = noOptionExerciseDates;
}

NoOptionExerciseDates.prototype.value = function () {
  return this.message;
};

NoOptionExerciseDates.Tag = '41137';

NoOptionExerciseDates.Type = 'NUMINGROUP';

module.exports = NoOptionExerciseDates;