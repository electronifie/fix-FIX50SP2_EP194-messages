var invert = require('invert-obj');

function UnderlyingOptionExerciseLatestTime (underlyingOptionExerciseLatestTime) {
  this.message = underlyingOptionExerciseLatestTime;
}

UnderlyingOptionExerciseLatestTime.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseLatestTime.Tag = '41839';

UnderlyingOptionExerciseLatestTime.Type = 'LOCALMKTTIME';

module.exports = UnderlyingOptionExerciseLatestTime;