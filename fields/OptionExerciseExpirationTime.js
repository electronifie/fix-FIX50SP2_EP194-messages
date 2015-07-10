var invert = require('invert-obj');

function OptionExerciseExpirationTime (optionExerciseExpirationTime) {
  this.message = optionExerciseExpirationTime;
}

OptionExerciseExpirationTime.prototype.value = function () {
  return this.message;
};

OptionExerciseExpirationTime.Tag = '41150';

OptionExerciseExpirationTime.Type = 'LOCALMKTTIME';

module.exports = OptionExerciseExpirationTime;