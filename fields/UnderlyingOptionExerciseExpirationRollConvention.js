var invert = require('invert-obj');

function UnderlyingOptionExerciseExpirationRollConvention (underlyingOptionExerciseExpirationRollConvention) {
  this.message = underlyingOptionExerciseExpirationRollConvention;
}

UnderlyingOptionExerciseExpirationRollConvention.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseExpirationRollConvention.Tag = '41852';

UnderlyingOptionExerciseExpirationRollConvention.Type = 'STRING';

module.exports = UnderlyingOptionExerciseExpirationRollConvention;