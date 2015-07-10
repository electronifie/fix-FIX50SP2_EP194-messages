var invert = require('invert-obj');

function LegOptionExerciseLatestTime (legOptionExerciseLatestTime) {
  this.message = legOptionExerciseLatestTime;
}

LegOptionExerciseLatestTime.prototype.value = function () {
  return this.message;
};

LegOptionExerciseLatestTime.Tag = '41510';

LegOptionExerciseLatestTime.Type = 'LOCALMKTTIME';

module.exports = LegOptionExerciseLatestTime;