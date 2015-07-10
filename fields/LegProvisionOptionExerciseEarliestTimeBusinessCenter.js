var invert = require('invert-obj');

function LegProvisionOptionExerciseEarliestTimeBusinessCenter (legProvisionOptionExerciseEarliestTimeBusinessCenter) {
  this.message = legProvisionOptionExerciseEarliestTimeBusinessCenter;
}

LegProvisionOptionExerciseEarliestTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseEarliestTimeBusinessCenter.Tag = '40492';

LegProvisionOptionExerciseEarliestTimeBusinessCenter.Type = 'STRING';

module.exports = LegProvisionOptionExerciseEarliestTimeBusinessCenter;