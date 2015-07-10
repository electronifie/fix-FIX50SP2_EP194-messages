var invert = require('invert-obj');

function OptionExerciseExpirationTimeBusinessCenter (optionExerciseExpirationTimeBusinessCenter) {
  this.message = optionExerciseExpirationTimeBusinessCenter;
}

OptionExerciseExpirationTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

OptionExerciseExpirationTimeBusinessCenter.Tag = '41151';

OptionExerciseExpirationTimeBusinessCenter.Type = 'STRING';

module.exports = OptionExerciseExpirationTimeBusinessCenter;