var invert = require('invert-obj');

function OptionExerciseFrequencyPeriod (optionExerciseFrequencyPeriod) {
  this.message = optionExerciseFrequencyPeriod;
}

OptionExerciseFrequencyPeriod.prototype.value = function () {
  return this.message;
};

OptionExerciseFrequencyPeriod.Tag = '41122';

OptionExerciseFrequencyPeriod.Type = 'INT';

module.exports = OptionExerciseFrequencyPeriod;