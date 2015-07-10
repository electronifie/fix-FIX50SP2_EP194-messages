var invert = require('invert-obj');

function LegOptionExerciseEarliestTime (legOptionExerciseEarliestTime) {
  this.message = legOptionExerciseEarliestTime;
}

LegOptionExerciseEarliestTime.prototype.value = function () {
  return this.message;
};

LegOptionExerciseEarliestTime.Tag = '41509';

LegOptionExerciseEarliestTime.Type = 'LOCALMKTTIME';

module.exports = LegOptionExerciseEarliestTime;