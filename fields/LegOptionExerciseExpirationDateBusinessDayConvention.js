var invert = require('invert-obj');

function LegOptionExerciseExpirationDateBusinessDayConvention (legOptionExerciseExpirationDateBusinessDayConvention) {
  this.message = legOptionExerciseExpirationDateBusinessDayConvention;
}

LegOptionExerciseExpirationDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegOptionExerciseExpirationDateBusinessDayConvention.Tag = '41517';

LegOptionExerciseExpirationDateBusinessDayConvention.Type = 'INT';

module.exports = LegOptionExerciseExpirationDateBusinessDayConvention;