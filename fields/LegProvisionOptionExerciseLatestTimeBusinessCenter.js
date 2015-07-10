var invert = require('invert-obj');

function LegProvisionOptionExerciseLatestTimeBusinessCenter (legProvisionOptionExerciseLatestTimeBusinessCenter) {
  this.message = legProvisionOptionExerciseLatestTimeBusinessCenter;
}

LegProvisionOptionExerciseLatestTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseLatestTimeBusinessCenter.Tag = '40494';

LegProvisionOptionExerciseLatestTimeBusinessCenter.Type = 'STRING';

module.exports = LegProvisionOptionExerciseLatestTimeBusinessCenter;