var invert = require('invert-obj');

function UnderlyingOptionExerciseExpirationDateBusinessCenter (underlyingOptionExerciseExpirationDateBusinessCenter) {
  this.message = underlyingOptionExerciseExpirationDateBusinessCenter;
}

UnderlyingOptionExerciseExpirationDateBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseExpirationDateBusinessCenter.Tag = '41845';

UnderlyingOptionExerciseExpirationDateBusinessCenter.Type = 'STRING';

module.exports = UnderlyingOptionExerciseExpirationDateBusinessCenter;