var invert = require('invert-obj');

function UnderlyingOptionExerciseLastDateUnadjusted (underlyingOptionExerciseLastDateUnadjusted) {
  this.message = underlyingOptionExerciseLastDateUnadjusted;
}

UnderlyingOptionExerciseLastDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseLastDateUnadjusted.Tag = '41837';

UnderlyingOptionExerciseLastDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingOptionExerciseLastDateUnadjusted;