var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseBusinessCenter (underlyingProvisionOptionExerciseBusinessCenter) {
  this.message = underlyingProvisionOptionExerciseBusinessCenter;
}

UnderlyingProvisionOptionExerciseBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseBusinessCenter.Tag = '42185';

UnderlyingProvisionOptionExerciseBusinessCenter.Type = 'STRING';

module.exports = UnderlyingProvisionOptionExerciseBusinessCenter;