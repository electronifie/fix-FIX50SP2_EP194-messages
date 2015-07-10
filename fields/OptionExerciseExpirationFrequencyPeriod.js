var invert = require('invert-obj');

function OptionExerciseExpirationFrequencyPeriod (optionExerciseExpirationFrequencyPeriod) {
  this.message = optionExerciseExpirationFrequencyPeriod;
}

OptionExerciseExpirationFrequencyPeriod.prototype.value = function () {
  return this.message;
};

OptionExerciseExpirationFrequencyPeriod.Tag = '41146';

OptionExerciseExpirationFrequencyPeriod.Type = 'INT';

module.exports = OptionExerciseExpirationFrequencyPeriod;