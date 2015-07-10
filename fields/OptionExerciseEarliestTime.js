var invert = require('invert-obj');

function OptionExerciseEarliestTime (optionExerciseEarliestTime) {
  this.message = optionExerciseEarliestTime;
}

OptionExerciseEarliestTime.prototype.value = function () {
  return this.message;
};

OptionExerciseEarliestTime.Tag = '41134';

OptionExerciseEarliestTime.Type = 'LOCALMKTTIME';

module.exports = OptionExerciseEarliestTime;