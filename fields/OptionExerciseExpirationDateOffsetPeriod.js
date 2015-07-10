var invert = require('invert-obj');

function OptionExerciseExpirationDateOffsetPeriod (optionExerciseExpirationDateOffsetPeriod) {
  this.message = optionExerciseExpirationDateOffsetPeriod;
}

OptionExerciseExpirationDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

OptionExerciseExpirationDateOffsetPeriod.Tag = '41144';

OptionExerciseExpirationDateOffsetPeriod.Type = 'INT';

module.exports = OptionExerciseExpirationDateOffsetPeriod;