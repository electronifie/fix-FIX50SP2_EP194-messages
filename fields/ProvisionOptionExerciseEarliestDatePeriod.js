var invert = require('invert-obj');

function ProvisionOptionExerciseEarliestDatePeriod (provisionOptionExerciseEarliestDatePeriod) {
  this.message = provisionOptionExerciseEarliestDatePeriod;
}

ProvisionOptionExerciseEarliestDatePeriod.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseEarliestDatePeriod.Tag = '40125';

ProvisionOptionExerciseEarliestDatePeriod.Type = 'INT';

module.exports = ProvisionOptionExerciseEarliestDatePeriod;