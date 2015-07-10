var invert = require('invert-obj');

function LegOptionExerciseExpirationDateOffsetPeriod (legOptionExerciseExpirationDateOffsetPeriod) {
  this.message = legOptionExerciseExpirationDateOffsetPeriod;
}

LegOptionExerciseExpirationDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegOptionExerciseExpirationDateOffsetPeriod.Tag = '41519';

LegOptionExerciseExpirationDateOffsetPeriod.Type = 'INT';

module.exports = LegOptionExerciseExpirationDateOffsetPeriod;