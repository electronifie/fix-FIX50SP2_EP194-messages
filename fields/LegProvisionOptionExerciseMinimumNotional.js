var invert = require('invert-obj');

function LegProvisionOptionExerciseMinimumNotional (legProvisionOptionExerciseMinimumNotional) {
  this.message = legProvisionOptionExerciseMinimumNotional;
}

LegProvisionOptionExerciseMinimumNotional.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseMinimumNotional.Tag = '40461';

LegProvisionOptionExerciseMinimumNotional.Type = 'AMT';

module.exports = LegProvisionOptionExerciseMinimumNotional;