var invert = require('invert-obj');

function UnderlyingOptionExerciseEarliestTime (underlyingOptionExerciseEarliestTime) {
  this.message = underlyingOptionExerciseEarliestTime;
}

UnderlyingOptionExerciseEarliestTime.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseEarliestTime.Tag = '41838';

UnderlyingOptionExerciseEarliestTime.Type = 'LOCALMKTTIME';

module.exports = UnderlyingOptionExerciseEarliestTime;