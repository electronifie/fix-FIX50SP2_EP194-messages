var invert = require('invert-obj');

function UnderlyingOptionExerciseFrequencyPeriod (underlyingOptionExerciseFrequencyPeriod) {
  this.message = underlyingOptionExerciseFrequencyPeriod;
}

UnderlyingOptionExerciseFrequencyPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseFrequencyPeriod.Tag = '41826';

UnderlyingOptionExerciseFrequencyPeriod.Type = 'INT';

module.exports = UnderlyingOptionExerciseFrequencyPeriod;