var invert = require('invert-obj');

function OptionExerciseExpirationDayType (optionExerciseExpirationDayType) {
  this.message = optionExerciseExpirationDayType;
}

OptionExerciseExpirationDayType.prototype.value = function () {
  return this.message;
};

OptionExerciseExpirationDayType.Tag = '41149';

OptionExerciseExpirationDayType.Type = 'INT';

module.exports = OptionExerciseExpirationDayType;