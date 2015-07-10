var invert = require('invert-obj');

function LegProvisionOptionExerciseStartDateRelativeTo (legProvisionOptionExerciseStartDateRelativeTo) {
  this.message = legProvisionOptionExerciseStartDateRelativeTo;
}

LegProvisionOptionExerciseStartDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseStartDateRelativeTo.Tag = '40483';

LegProvisionOptionExerciseStartDateRelativeTo.Type = 'INT';

module.exports = LegProvisionOptionExerciseStartDateRelativeTo;