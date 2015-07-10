var invert = require('invert-obj');

function ProvisionOptionExerciseBusinessCenter (provisionOptionExerciseBusinessCenter) {
  this.message = provisionOptionExerciseBusinessCenter;
}

ProvisionOptionExerciseBusinessCenter.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseBusinessCenter.Tag = '40124';

ProvisionOptionExerciseBusinessCenter.Type = 'STRING';

module.exports = ProvisionOptionExerciseBusinessCenter;