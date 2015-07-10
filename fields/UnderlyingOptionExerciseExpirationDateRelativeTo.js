var invert = require('invert-obj');

function UnderlyingOptionExerciseExpirationDateRelativeTo (underlyingOptionExerciseExpirationDateRelativeTo) {
  this.message = underlyingOptionExerciseExpirationDateRelativeTo;
}

UnderlyingOptionExerciseExpirationDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseExpirationDateRelativeTo.Tag = '41847';

UnderlyingOptionExerciseExpirationDateRelativeTo.Type = 'INT';

module.exports = UnderlyingOptionExerciseExpirationDateRelativeTo;