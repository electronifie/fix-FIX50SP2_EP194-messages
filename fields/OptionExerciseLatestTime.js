var invert = require('invert-obj');

function OptionExerciseLatestTime (optionExerciseLatestTime) {
  this.message = optionExerciseLatestTime;
}

OptionExerciseLatestTime.prototype.value = function () {
  return this.message;
};

OptionExerciseLatestTime.Tag = '41135';

OptionExerciseLatestTime.Type = 'LOCALMKTTIME';

module.exports = OptionExerciseLatestTime;