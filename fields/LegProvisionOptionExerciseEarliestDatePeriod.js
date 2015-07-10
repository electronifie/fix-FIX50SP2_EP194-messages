var invert = require('invert-obj');

function LegProvisionOptionExerciseEarliestDatePeriod (legProvisionOptionExerciseEarliestDatePeriod) {
  this.message = legProvisionOptionExerciseEarliestDatePeriod;
}

LegProvisionOptionExerciseEarliestDatePeriod.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseEarliestDatePeriod.Tag = '40478';

LegProvisionOptionExerciseEarliestDatePeriod.Type = 'INT';

module.exports = LegProvisionOptionExerciseEarliestDatePeriod;