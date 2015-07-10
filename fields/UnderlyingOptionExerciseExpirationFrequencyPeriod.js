var invert = require('invert-obj');

function UnderlyingOptionExerciseExpirationFrequencyPeriod (underlyingOptionExerciseExpirationFrequencyPeriod) {
  this.message = underlyingOptionExerciseExpirationFrequencyPeriod;
}

UnderlyingOptionExerciseExpirationFrequencyPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseExpirationFrequencyPeriod.Tag = '41850';

UnderlyingOptionExerciseExpirationFrequencyPeriod.Type = 'INT';

module.exports = UnderlyingOptionExerciseExpirationFrequencyPeriod;