var invert = require('invert-obj');

function NoLegOptionExerciseDates (noLegOptionExerciseDates) {
  this.message = noLegOptionExerciseDates;
}

NoLegOptionExerciseDates.prototype.value = function () {
  return this.message;
};

NoLegOptionExerciseDates.Tag = '41512';

NoLegOptionExerciseDates.Type = 'NUMINGROUP';

module.exports = NoLegOptionExerciseDates;