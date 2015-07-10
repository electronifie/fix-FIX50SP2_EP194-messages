var invert = require('invert-obj');

function LegOptionExerciseEarliestDateUnit (legOptionExerciseEarliestDateUnit) {
  this.message = legOptionExerciseEarliestDateUnit;
}

LegOptionExerciseEarliestDateUnit.prototype.value = function () {
  return this.message;
};

LegOptionExerciseEarliestDateUnit.Tag = '41496';

LegOptionExerciseEarliestDateUnit.Type = 'STRING';

module.exports = LegOptionExerciseEarliestDateUnit;