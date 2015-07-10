var invert = require('invert-obj');

function UnderlyingOptionExerciseExpirationDateType (underlyingOptionExerciseExpirationDateType) {
  this.message = underlyingOptionExerciseExpirationDateType;
}

UnderlyingOptionExerciseExpirationDateType.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseExpirationDateType.Tag = '41858';

UnderlyingOptionExerciseExpirationDateType.Type = 'INT';

module.exports = UnderlyingOptionExerciseExpirationDateType;