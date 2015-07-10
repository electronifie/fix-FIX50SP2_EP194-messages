var invert = require('invert-obj');

function ProvisionOptionExerciseLatestTimeBusinessCenter (provisionOptionExerciseLatestTimeBusinessCenter) {
  this.message = provisionOptionExerciseLatestTimeBusinessCenter;
}

ProvisionOptionExerciseLatestTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseLatestTimeBusinessCenter.Tag = '40141';

ProvisionOptionExerciseLatestTimeBusinessCenter.Type = 'STRING';

module.exports = ProvisionOptionExerciseLatestTimeBusinessCenter;