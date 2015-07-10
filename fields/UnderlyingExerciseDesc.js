var invert = require('invert-obj');

function UnderlyingExerciseDesc (underlyingExerciseDesc) {
  this.message = underlyingExerciseDesc;
}

UnderlyingExerciseDesc.prototype.value = function () {
  return this.message;
};

UnderlyingExerciseDesc.Tag = '41810';

UnderlyingExerciseDesc.Type = 'STRING';

module.exports = UnderlyingExerciseDesc;