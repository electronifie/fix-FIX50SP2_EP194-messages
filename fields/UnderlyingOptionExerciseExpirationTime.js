var invert = require('invert-obj');

function UnderlyingOptionExerciseExpirationTime (underlyingOptionExerciseExpirationTime) {
  this.message = underlyingOptionExerciseExpirationTime;
}

UnderlyingOptionExerciseExpirationTime.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseExpirationTime.Tag = '41854';

UnderlyingOptionExerciseExpirationTime.Type = 'LOCALMKTTIME';

module.exports = UnderlyingOptionExerciseExpirationTime;