var invert = require('invert-obj');

function ProvisionOptionExerciseMaximumNotional (provisionOptionExerciseMaximumNotional) {
  this.message = provisionOptionExerciseMaximumNotional;
}

ProvisionOptionExerciseMaximumNotional.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseMaximumNotional.Tag = '40104';

ProvisionOptionExerciseMaximumNotional.Type = 'AMT';

module.exports = ProvisionOptionExerciseMaximumNotional;