var invert = require('invert-obj');

function ProvisionOptionExerciseEarliestTime (provisionOptionExerciseEarliestTime) {
  this.message = provisionOptionExerciseEarliestTime;
}

ProvisionOptionExerciseEarliestTime.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseEarliestTime.Tag = '40138';

ProvisionOptionExerciseEarliestTime.Type = 'LOCALMKTTIME';

module.exports = ProvisionOptionExerciseEarliestTime;