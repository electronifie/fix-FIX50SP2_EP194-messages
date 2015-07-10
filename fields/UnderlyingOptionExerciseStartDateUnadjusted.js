var invert = require('invert-obj');

function UnderlyingOptionExerciseStartDateUnadjusted (underlyingOptionExerciseStartDateUnadjusted) {
  this.message = underlyingOptionExerciseStartDateUnadjusted;
}

UnderlyingOptionExerciseStartDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseStartDateUnadjusted.Tag = '41828';

UnderlyingOptionExerciseStartDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingOptionExerciseStartDateUnadjusted;