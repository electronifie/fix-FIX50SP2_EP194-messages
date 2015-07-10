var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseLatestTime (underlyingProvisionOptionExerciseLatestTime) {
  this.message = underlyingProvisionOptionExerciseLatestTime;
}

UnderlyingProvisionOptionExerciseLatestTime.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseLatestTime.Tag = '42131';

UnderlyingProvisionOptionExerciseLatestTime.Type = 'LOCALMKTTIME';

module.exports = UnderlyingProvisionOptionExerciseLatestTime;