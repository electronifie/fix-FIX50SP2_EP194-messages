var invert = require('invert-obj');

function UnderlyingOptionExerciseExpirationDateOffsetUnit (underlyingOptionExerciseExpirationDateOffsetUnit) {
  this.message = underlyingOptionExerciseExpirationDateOffsetUnit;
}

UnderlyingOptionExerciseExpirationDateOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseExpirationDateOffsetUnit.Tag = '41849';

UnderlyingOptionExerciseExpirationDateOffsetUnit.Type = 'STRING';

module.exports = UnderlyingOptionExerciseExpirationDateOffsetUnit;