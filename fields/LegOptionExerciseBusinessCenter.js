var invert = require('invert-obj');

function LegOptionExerciseBusinessCenter (legOptionExerciseBusinessCenter) {
  this.message = legOptionExerciseBusinessCenter;
}

LegOptionExerciseBusinessCenter.prototype.value = function () {
  return this.message;
};

LegOptionExerciseBusinessCenter.Tag = '41492';

LegOptionExerciseBusinessCenter.Type = 'STRING';

module.exports = LegOptionExerciseBusinessCenter;