var invert = require('invert-obj');

function LegProvisionOptionExerciseMultipleNotional (legProvisionOptionExerciseMultipleNotional) {
  this.message = legProvisionOptionExerciseMultipleNotional;
}

LegProvisionOptionExerciseMultipleNotional.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseMultipleNotional.Tag = '40460';

LegProvisionOptionExerciseMultipleNotional.Type = 'AMT';

module.exports = LegProvisionOptionExerciseMultipleNotional;