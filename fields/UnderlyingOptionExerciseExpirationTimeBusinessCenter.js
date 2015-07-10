var invert = require('invert-obj');

function UnderlyingOptionExerciseExpirationTimeBusinessCenter (underlyingOptionExerciseExpirationTimeBusinessCenter) {
  this.message = underlyingOptionExerciseExpirationTimeBusinessCenter;
}

UnderlyingOptionExerciseExpirationTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseExpirationTimeBusinessCenter.Tag = '41855';

UnderlyingOptionExerciseExpirationTimeBusinessCenter.Type = 'STRING';

module.exports = UnderlyingOptionExerciseExpirationTimeBusinessCenter;