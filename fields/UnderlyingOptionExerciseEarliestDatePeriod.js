var invert = require('invert-obj');

function UnderlyingOptionExerciseEarliestDatePeriod (underlyingOptionExerciseEarliestDatePeriod) {
  this.message = underlyingOptionExerciseEarliestDatePeriod;
}

UnderlyingOptionExerciseEarliestDatePeriod.prototype.value = function () {
  return this.message;
};

UnderlyingOptionExerciseEarliestDatePeriod.Tag = '41824';

UnderlyingOptionExerciseEarliestDatePeriod.Type = 'INT';

module.exports = UnderlyingOptionExerciseEarliestDatePeriod;