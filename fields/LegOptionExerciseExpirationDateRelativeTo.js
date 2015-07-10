var invert = require('invert-obj');

function LegOptionExerciseExpirationDateRelativeTo (legOptionExerciseExpirationDateRelativeTo) {
  this.message = legOptionExerciseExpirationDateRelativeTo;
}

LegOptionExerciseExpirationDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegOptionExerciseExpirationDateRelativeTo.Tag = '41518';

LegOptionExerciseExpirationDateRelativeTo.Type = 'INT';

module.exports = LegOptionExerciseExpirationDateRelativeTo;