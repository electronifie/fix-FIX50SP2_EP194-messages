var invert = require('invert-obj');

function LegExerciseDesc (legExerciseDesc) {
  this.message = legExerciseDesc;
}

LegExerciseDesc.prototype.value = function () {
  return this.message;
};

LegExerciseDesc.Tag = '41481';

LegExerciseDesc.Type = 'STRING';

module.exports = LegExerciseDesc;