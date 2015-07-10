var invert = require('invert-obj');

function NoUnderlyingOptionExerciseDates (noUnderlyingOptionExerciseDates) {
  this.message = noUnderlyingOptionExerciseDates;
}

NoUnderlyingOptionExerciseDates.prototype.value = function () {
  return this.message;
};

NoUnderlyingOptionExerciseDates.Tag = '41841';

NoUnderlyingOptionExerciseDates.Type = 'NUMINGROUP';

module.exports = NoUnderlyingOptionExerciseDates;