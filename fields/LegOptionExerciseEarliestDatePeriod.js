var invert = require('invert-obj');

function LegOptionExerciseEarliestDatePeriod (legOptionExerciseEarliestDatePeriod) {
  this.message = legOptionExerciseEarliestDatePeriod;
}

LegOptionExerciseEarliestDatePeriod.prototype.value = function () {
  return this.message;
};

LegOptionExerciseEarliestDatePeriod.Tag = '41495';

LegOptionExerciseEarliestDatePeriod.Type = 'INT';

module.exports = LegOptionExerciseEarliestDatePeriod;