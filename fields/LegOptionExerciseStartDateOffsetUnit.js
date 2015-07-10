var invert = require('invert-obj');

function LegOptionExerciseStartDateOffsetUnit (legOptionExerciseStartDateOffsetUnit) {
  this.message = legOptionExerciseStartDateOffsetUnit;
}

LegOptionExerciseStartDateOffsetUnit.prototype.value = function () {
  return this.message;
};

LegOptionExerciseStartDateOffsetUnit.Tag = '41502';

LegOptionExerciseStartDateOffsetUnit.Type = 'STRING';

module.exports = LegOptionExerciseStartDateOffsetUnit;