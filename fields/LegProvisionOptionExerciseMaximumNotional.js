var invert = require('invert-obj');

function LegProvisionOptionExerciseMaximumNotional (legProvisionOptionExerciseMaximumNotional) {
  this.message = legProvisionOptionExerciseMaximumNotional;
}

LegProvisionOptionExerciseMaximumNotional.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseMaximumNotional.Tag = '40462';

LegProvisionOptionExerciseMaximumNotional.Type = 'AMT';

module.exports = LegProvisionOptionExerciseMaximumNotional;