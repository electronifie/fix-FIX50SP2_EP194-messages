var invert = require('invert-obj');

function LegOptionExerciseExpirationTimeBusinessCenter (legOptionExerciseExpirationTimeBusinessCenter) {
  this.message = legOptionExerciseExpirationTimeBusinessCenter;
}

LegOptionExerciseExpirationTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

LegOptionExerciseExpirationTimeBusinessCenter.Tag = '41526';

LegOptionExerciseExpirationTimeBusinessCenter.Type = 'STRING';

module.exports = LegOptionExerciseExpirationTimeBusinessCenter;