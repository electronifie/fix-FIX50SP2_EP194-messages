var invert = require('invert-obj');

function ProvisionOptionExerciseMinimumNotional (provisionOptionExerciseMinimumNotional) {
  this.message = provisionOptionExerciseMinimumNotional;
}

ProvisionOptionExerciseMinimumNotional.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseMinimumNotional.Tag = '40103';

ProvisionOptionExerciseMinimumNotional.Type = 'AMT';

module.exports = ProvisionOptionExerciseMinimumNotional;