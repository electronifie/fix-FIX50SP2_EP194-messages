var invert = require('invert-obj');

function UnderlyingOptionExerciseStartDateAdjusted (underlyingOptionExerciseStartDateAdjusted) {
  this.message = underlyingOptionExerciseStartDateAdjusted;
}

UnderlyingOptionExerciseStartDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseStartDateAdjusted.Tag = '41833';

UnderlyingOptionExerciseStartDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingOptionExerciseStartDateAdjusted;