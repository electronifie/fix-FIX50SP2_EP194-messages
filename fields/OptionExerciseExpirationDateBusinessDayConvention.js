var invert = require('invert-obj');

function OptionExerciseExpirationDateBusinessDayConvention (optionExerciseExpirationDateBusinessDayConvention) {
  this.message = optionExerciseExpirationDateBusinessDayConvention;
}

OptionExerciseExpirationDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

OptionExerciseExpirationDateBusinessDayConvention.Tag = '41142';

OptionExerciseExpirationDateBusinessDayConvention.Type = 'INT';

module.exports = OptionExerciseExpirationDateBusinessDayConvention;