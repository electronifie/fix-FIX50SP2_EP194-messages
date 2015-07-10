var invert = require('invert-obj');

function LegOptionExerciseTimeBusinessCenter (legOptionExerciseTimeBusinessCenter) {
  this.message = legOptionExerciseTimeBusinessCenter;
}

LegOptionExerciseTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

LegOptionExerciseTimeBusinessCenter.Tag = '41511';

LegOptionExerciseTimeBusinessCenter.Type = 'STRING';

module.exports = LegOptionExerciseTimeBusinessCenter;