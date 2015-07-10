var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter (underlyingProvisionOptionExerciseLatestTimeBusinessCenter) {
  this.message = underlyingProvisionOptionExerciseLatestTimeBusinessCenter;
}

UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter.Tag = '42132';

UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter.Type = 'STRING';

module.exports = UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter;