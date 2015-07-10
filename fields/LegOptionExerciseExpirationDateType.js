var invert = require('invert-obj');

function LegOptionExerciseExpirationDateType (legOptionExerciseExpirationDateType) {
  this.message = legOptionExerciseExpirationDateType;
}

LegOptionExerciseExpirationDateType.prototype.value = function () {
  return this.message;
};

LegOptionExerciseExpirationDateType.Tag = '41529';

LegOptionExerciseExpirationDateType.Type = 'INT';

module.exports = LegOptionExerciseExpirationDateType;