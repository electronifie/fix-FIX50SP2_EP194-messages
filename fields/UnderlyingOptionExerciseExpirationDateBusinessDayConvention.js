var invert = require('invert-obj');

function UnderlyingOptionExerciseExpirationDateBusinessDayConvention (underlyingOptionExerciseExpirationDateBusinessDayConvention) {
  this.message = underlyingOptionExerciseExpirationDateBusinessDayConvention;
}

UnderlyingOptionExerciseExpirationDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseExpirationDateBusinessDayConvention.Tag = '41846';

UnderlyingOptionExerciseExpirationDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingOptionExerciseExpirationDateBusinessDayConvention;