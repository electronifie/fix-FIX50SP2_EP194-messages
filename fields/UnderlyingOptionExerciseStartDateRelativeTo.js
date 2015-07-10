var invert = require('invert-obj');

function UnderlyingOptionExerciseStartDateRelativeTo (underlyingOptionExerciseStartDateRelativeTo) {
  this.message = underlyingOptionExerciseStartDateRelativeTo;
}

UnderlyingOptionExerciseStartDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseStartDateRelativeTo.Tag = '41829';

UnderlyingOptionExerciseStartDateRelativeTo.Type = 'INT';

module.exports = UnderlyingOptionExerciseStartDateRelativeTo;