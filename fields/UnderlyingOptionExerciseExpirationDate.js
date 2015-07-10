var invert = require('invert-obj');

function UnderlyingOptionExerciseExpirationDate (underlyingOptionExerciseExpirationDate) {
  this.message = underlyingOptionExerciseExpirationDate;
}

UnderlyingOptionExerciseExpirationDate.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseExpirationDate.Tag = '41857';

UnderlyingOptionExerciseExpirationDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingOptionExerciseExpirationDate;