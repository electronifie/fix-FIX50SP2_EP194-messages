var invert = require('invert-obj');

function OptionExerciseEarliestDatePeriod (optionExerciseEarliestDatePeriod) {
  this.message = optionExerciseEarliestDatePeriod;
}

OptionExerciseEarliestDatePeriod.prototype.value = function () {
  return this.message;
};

OptionExerciseEarliestDatePeriod.Tag = '41120';

OptionExerciseEarliestDatePeriod.Type = 'INT';

module.exports = OptionExerciseEarliestDatePeriod;