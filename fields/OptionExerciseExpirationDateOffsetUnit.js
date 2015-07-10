var invert = require('invert-obj');

function OptionExerciseExpirationDateOffsetUnit (optionExerciseExpirationDateOffsetUnit) {
  this.message = optionExerciseExpirationDateOffsetUnit;
}

OptionExerciseExpirationDateOffsetUnit.prototype.value = function () {
  return this.message;
};

OptionExerciseExpirationDateOffsetUnit.Tag = '41145';

OptionExerciseExpirationDateOffsetUnit.Type = 'STRING';

module.exports = OptionExerciseExpirationDateOffsetUnit;