var invert = require('invert-obj');

function LegOptionExerciseSkip (legOptionExerciseSkip) {
  this.message = legOptionExerciseSkip;
}

LegOptionExerciseSkip.prototype.value = function () {
  return this.message;
};

LegOptionExerciseSkip.Tag = '41505';

LegOptionExerciseSkip.Type = 'INT';

module.exports = LegOptionExerciseSkip;