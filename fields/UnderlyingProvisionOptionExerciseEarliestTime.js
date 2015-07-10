var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseEarliestTime (underlyingProvisionOptionExerciseEarliestTime) {
  this.message = underlyingProvisionOptionExerciseEarliestTime;
}

UnderlyingProvisionOptionExerciseEarliestTime.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseEarliestTime.Tag = '42129';

UnderlyingProvisionOptionExerciseEarliestTime.Type = 'LOCALMKTTIME';

module.exports = UnderlyingProvisionOptionExerciseEarliestTime;