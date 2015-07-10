var invert = require('invert-obj');

function OptionExerciseExpirationDateBusinessCenter (optionExerciseExpirationDateBusinessCenter) {
  this.message = optionExerciseExpirationDateBusinessCenter;
}

OptionExerciseExpirationDateBusinessCenter.prototype.value = function () {
  return this.message;
};

OptionExerciseExpirationDateBusinessCenter.Tag = '41141';

OptionExerciseExpirationDateBusinessCenter.Type = 'STRING';

module.exports = OptionExerciseExpirationDateBusinessCenter;