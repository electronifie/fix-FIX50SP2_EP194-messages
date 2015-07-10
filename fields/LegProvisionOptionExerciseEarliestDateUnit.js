var invert = require('invert-obj');

function LegProvisionOptionExerciseEarliestDateUnit (legProvisionOptionExerciseEarliestDateUnit) {
  this.message = legProvisionOptionExerciseEarliestDateUnit;
}

LegProvisionOptionExerciseEarliestDateUnit.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseEarliestDateUnit.Tag = '40479';

LegProvisionOptionExerciseEarliestDateUnit.Type = 'STRING';

module.exports = LegProvisionOptionExerciseEarliestDateUnit;