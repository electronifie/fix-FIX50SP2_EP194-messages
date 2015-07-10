var invert = require('invert-obj');

function UnderlyingOptionExerciseStartDateOffsetUnit (underlyingOptionExerciseStartDateOffsetUnit) {
  this.message = underlyingOptionExerciseStartDateOffsetUnit;
}

UnderlyingOptionExerciseStartDateOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseStartDateOffsetUnit.Tag = '41831';

UnderlyingOptionExerciseStartDateOffsetUnit.Type = 'STRING';

module.exports = UnderlyingOptionExerciseStartDateOffsetUnit;