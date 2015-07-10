var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseMaximumNotional (underlyingProvisionOptionExerciseMaximumNotional) {
  this.message = underlyingProvisionOptionExerciseMaximumNotional;
}

UnderlyingProvisionOptionExerciseMaximumNotional.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseMaximumNotional.Tag = '42162';

UnderlyingProvisionOptionExerciseMaximumNotional.Type = 'AMT';

module.exports = UnderlyingProvisionOptionExerciseMaximumNotional;