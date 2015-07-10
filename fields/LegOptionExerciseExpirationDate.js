var invert = require('invert-obj');

function LegOptionExerciseExpirationDate (legOptionExerciseExpirationDate) {
  this.message = legOptionExerciseExpirationDate;
}

LegOptionExerciseExpirationDate.prototype.value = function () {
  return this.message;
};

LegOptionExerciseExpirationDate.Tag = '41528';

LegOptionExerciseExpirationDate.Type = 'LOCALMKTDATE';

module.exports = LegOptionExerciseExpirationDate;