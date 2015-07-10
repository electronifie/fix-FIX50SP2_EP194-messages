var invert = require('invert-obj');

function LegProvisionOptionExerciseEarliestTime (legProvisionOptionExerciseEarliestTime) {
  this.message = legProvisionOptionExerciseEarliestTime;
}

LegProvisionOptionExerciseEarliestTime.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseEarliestTime.Tag = '40491';

LegProvisionOptionExerciseEarliestTime.Type = 'LOCALMKTTIME';

module.exports = LegProvisionOptionExerciseEarliestTime;