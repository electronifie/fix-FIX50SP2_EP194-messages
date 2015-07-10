var invert = require('invert-obj');

function UnderlyingOptionExerciseFrequencyUnit (underlyingOptionExerciseFrequencyUnit) {
  this.message = underlyingOptionExerciseFrequencyUnit;
}

UnderlyingOptionExerciseFrequencyUnit.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseFrequencyUnit.Tag = '41827';

UnderlyingOptionExerciseFrequencyUnit.Type = 'STRING';

module.exports = UnderlyingOptionExerciseFrequencyUnit;