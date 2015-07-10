var invert = require('invert-obj');

function ProvisionOptionExerciseEarliestTimeBusinessCenter (provisionOptionExerciseEarliestTimeBusinessCenter) {
  this.message = provisionOptionExerciseEarliestTimeBusinessCenter;
}

ProvisionOptionExerciseEarliestTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseEarliestTimeBusinessCenter.Tag = '40139';

ProvisionOptionExerciseEarliestTimeBusinessCenter.Type = 'STRING';

module.exports = ProvisionOptionExerciseEarliestTimeBusinessCenter;