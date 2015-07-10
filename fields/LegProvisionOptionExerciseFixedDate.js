var invert = require('invert-obj');

function LegProvisionOptionExerciseFixedDate (legProvisionOptionExerciseFixedDate) {
  this.message = legProvisionOptionExerciseFixedDate;
}

LegProvisionOptionExerciseFixedDate.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseFixedDate.Tag = '40496';

LegProvisionOptionExerciseFixedDate.Type = 'LOCALMKTDATE';

module.exports = LegProvisionOptionExerciseFixedDate;