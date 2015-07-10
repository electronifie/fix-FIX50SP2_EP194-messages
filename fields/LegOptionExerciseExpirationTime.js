var invert = require('invert-obj');

function LegOptionExerciseExpirationTime (legOptionExerciseExpirationTime) {
  this.message = legOptionExerciseExpirationTime;
}

LegOptionExerciseExpirationTime.prototype.value = function () {
  return this.message;
};

LegOptionExerciseExpirationTime.Tag = '41525';

LegOptionExerciseExpirationTime.Type = 'LOCALMKTTIME';

module.exports = LegOptionExerciseExpirationTime;