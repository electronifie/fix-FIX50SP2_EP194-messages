var invert = require('invert-obj');

function LegOptionExerciseFrequencyPeriod (legOptionExerciseFrequencyPeriod) {
  this.message = legOptionExerciseFrequencyPeriod;
}

LegOptionExerciseFrequencyPeriod.prototype.value = function () {
  return this.message;
};

LegOptionExerciseFrequencyPeriod.Tag = '41497';

LegOptionExerciseFrequencyPeriod.Type = 'INT';

module.exports = LegOptionExerciseFrequencyPeriod;