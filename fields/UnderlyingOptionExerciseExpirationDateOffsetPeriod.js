var invert = require('invert-obj');

function UnderlyingOptionExerciseExpirationDateOffsetPeriod (underlyingOptionExerciseExpirationDateOffsetPeriod) {
  this.message = underlyingOptionExerciseExpirationDateOffsetPeriod;
}

UnderlyingOptionExerciseExpirationDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseExpirationDateOffsetPeriod.Tag = '41848';

UnderlyingOptionExerciseExpirationDateOffsetPeriod.Type = 'INT';

module.exports = UnderlyingOptionExerciseExpirationDateOffsetPeriod;