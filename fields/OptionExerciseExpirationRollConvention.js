var invert = require('invert-obj');

function OptionExerciseExpirationRollConvention (optionExerciseExpirationRollConvention) {
  this.message = optionExerciseExpirationRollConvention;
}

OptionExerciseExpirationRollConvention.prototype.value = function () {
  return this.message;
};

OptionExerciseExpirationRollConvention.Tag = '41148';

OptionExerciseExpirationRollConvention.Type = 'STRING';

module.exports = OptionExerciseExpirationRollConvention;