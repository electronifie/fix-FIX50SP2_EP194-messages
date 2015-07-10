var invert = require('invert-obj');

function ProvisionOptionExerciseLatestTime (provisionOptionExerciseLatestTime) {
  this.message = provisionOptionExerciseLatestTime;
}

ProvisionOptionExerciseLatestTime.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseLatestTime.Tag = '40140';

ProvisionOptionExerciseLatestTime.Type = 'LOCALMKTTIME';

module.exports = ProvisionOptionExerciseLatestTime;