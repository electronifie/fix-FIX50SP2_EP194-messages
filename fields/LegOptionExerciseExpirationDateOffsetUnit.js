var invert = require('invert-obj');

function LegOptionExerciseExpirationDateOffsetUnit (legOptionExerciseExpirationDateOffsetUnit) {
  this.message = legOptionExerciseExpirationDateOffsetUnit;
}

LegOptionExerciseExpirationDateOffsetUnit.prototype.value = function () {
  return this.message;
};

LegOptionExerciseExpirationDateOffsetUnit.Tag = '41520';

LegOptionExerciseExpirationDateOffsetUnit.Type = 'STRING';

module.exports = LegOptionExerciseExpirationDateOffsetUnit;