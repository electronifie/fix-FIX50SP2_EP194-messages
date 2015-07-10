var invert = require('invert-obj');

function LegOptionExerciseBusinessDayConvention (legOptionExerciseBusinessDayConvention) {
  this.message = legOptionExerciseBusinessDayConvention;
}

LegOptionExerciseBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegOptionExerciseBusinessDayConvention.Tag = '41493';

LegOptionExerciseBusinessDayConvention.Type = 'INT';

module.exports = LegOptionExerciseBusinessDayConvention;