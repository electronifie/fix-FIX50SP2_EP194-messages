var invert = require('invert-obj');

function UnderlyingOptionExerciseEarliestDateUnit (underlyingOptionExerciseEarliestDateUnit) {
  this.message = underlyingOptionExerciseEarliestDateUnit;
}

UnderlyingOptionExerciseEarliestDateUnit.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseEarliestDateUnit.Tag = '41825';

UnderlyingOptionExerciseEarliestDateUnit.Type = 'STRING';

module.exports = UnderlyingOptionExerciseEarliestDateUnit;