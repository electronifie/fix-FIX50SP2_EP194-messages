var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseMinimumNotional (underlyingProvisionOptionExerciseMinimumNotional) {
  this.message = underlyingProvisionOptionExerciseMinimumNotional;
}

UnderlyingProvisionOptionExerciseMinimumNotional.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseMinimumNotional.Tag = '42161';

UnderlyingProvisionOptionExerciseMinimumNotional.Type = 'AMT';

module.exports = UnderlyingProvisionOptionExerciseMinimumNotional;