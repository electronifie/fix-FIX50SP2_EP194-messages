var invert = require('invert-obj');

function UnderlyingOptionExerciseExpirationDayType (underlyingOptionExerciseExpirationDayType) {
  this.message = underlyingOptionExerciseExpirationDayType;
}

UnderlyingOptionExerciseExpirationDayType.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseExpirationDayType.Tag = '41853';

UnderlyingOptionExerciseExpirationDayType.Type = 'INT';

module.exports = UnderlyingOptionExerciseExpirationDayType;