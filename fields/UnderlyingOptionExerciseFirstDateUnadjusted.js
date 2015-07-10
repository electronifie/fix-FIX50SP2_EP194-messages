var invert = require('invert-obj');

function UnderlyingOptionExerciseFirstDateUnadjusted (underlyingOptionExerciseFirstDateUnadjusted) {
  this.message = underlyingOptionExerciseFirstDateUnadjusted;
}

UnderlyingOptionExerciseFirstDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseFirstDateUnadjusted.Tag = '41836';

UnderlyingOptionExerciseFirstDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingOptionExerciseFirstDateUnadjusted;