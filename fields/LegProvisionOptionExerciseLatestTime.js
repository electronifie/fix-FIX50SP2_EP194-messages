var invert = require('invert-obj');

function LegProvisionOptionExerciseLatestTime (legProvisionOptionExerciseLatestTime) {
  this.message = legProvisionOptionExerciseLatestTime;
}

LegProvisionOptionExerciseLatestTime.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseLatestTime.Tag = '40493';

LegProvisionOptionExerciseLatestTime.Type = 'LOCALMKTTIME';

module.exports = LegProvisionOptionExerciseLatestTime;