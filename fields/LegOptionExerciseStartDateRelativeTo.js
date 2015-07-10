var invert = require('invert-obj');

function LegOptionExerciseStartDateRelativeTo (legOptionExerciseStartDateRelativeTo) {
  this.message = legOptionExerciseStartDateRelativeTo;
}

LegOptionExerciseStartDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegOptionExerciseStartDateRelativeTo.Tag = '41500';

LegOptionExerciseStartDateRelativeTo.Type = 'INT';

module.exports = LegOptionExerciseStartDateRelativeTo;