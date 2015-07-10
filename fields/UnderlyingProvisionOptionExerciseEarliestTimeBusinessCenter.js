var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseEarliestTimeBusinessCenter (underlyingProvisionOptionExerciseEarliestTimeBusinessCenter) {
  this.message = underlyingProvisionOptionExerciseEarliestTimeBusinessCenter;
}

UnderlyingProvisionOptionExerciseEarliestTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseEarliestTimeBusinessCenter.Tag = '42130';

UnderlyingProvisionOptionExerciseEarliestTimeBusinessCenter.Type = 'STRING';

module.exports = UnderlyingProvisionOptionExerciseEarliestTimeBusinessCenter;