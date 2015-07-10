var invert = require('invert-obj');

function LegOptionExerciseExpirationFrequencyPeriod (legOptionExerciseExpirationFrequencyPeriod) {
  this.message = legOptionExerciseExpirationFrequencyPeriod;
}

LegOptionExerciseExpirationFrequencyPeriod.prototype.value = function () {
  return this.message;
};

LegOptionExerciseExpirationFrequencyPeriod.Tag = '41521';

LegOptionExerciseExpirationFrequencyPeriod.Type = 'INT';

module.exports = LegOptionExerciseExpirationFrequencyPeriod;