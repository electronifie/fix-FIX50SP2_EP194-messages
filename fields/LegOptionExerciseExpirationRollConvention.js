var invert = require('invert-obj');

function LegOptionExerciseExpirationRollConvention (legOptionExerciseExpirationRollConvention) {
  this.message = legOptionExerciseExpirationRollConvention;
}

LegOptionExerciseExpirationRollConvention.prototype.value = function () {
  return this.message;
};

LegOptionExerciseExpirationRollConvention.Tag = '41523';

LegOptionExerciseExpirationRollConvention.Type = 'STRING';

module.exports = LegOptionExerciseExpirationRollConvention;