var invert = require('invert-obj');

function LegOptionExerciseExpirationDayType (legOptionExerciseExpirationDayType) {
  this.message = legOptionExerciseExpirationDayType;
}

LegOptionExerciseExpirationDayType.prototype.value = function () {
  return this.message;
};

LegOptionExerciseExpirationDayType.Tag = '41524';

LegOptionExerciseExpirationDayType.Type = 'INT';

module.exports = LegOptionExerciseExpirationDayType;