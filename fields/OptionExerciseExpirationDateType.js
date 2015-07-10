var invert = require('invert-obj');

function OptionExerciseExpirationDateType (optionExerciseExpirationDateType) {
  this.message = optionExerciseExpirationDateType;
}

OptionExerciseExpirationDateType.prototype.value = function () {
  return this.message;
};

OptionExerciseExpirationDateType.Tag = '41154';

OptionExerciseExpirationDateType.Type = 'INT';

module.exports = OptionExerciseExpirationDateType;