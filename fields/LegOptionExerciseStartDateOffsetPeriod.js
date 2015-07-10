var invert = require('invert-obj');

function LegOptionExerciseStartDateOffsetPeriod (legOptionExerciseStartDateOffsetPeriod) {
  this.message = legOptionExerciseStartDateOffsetPeriod;
}

LegOptionExerciseStartDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegOptionExerciseStartDateOffsetPeriod.Tag = '41501';

LegOptionExerciseStartDateOffsetPeriod.Type = 'INT';

module.exports = LegOptionExerciseStartDateOffsetPeriod;