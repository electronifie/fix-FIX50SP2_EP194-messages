var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseEarliestDateUnit (underlyingProvisionOptionExerciseEarliestDateUnit) {
  this.message = underlyingProvisionOptionExerciseEarliestDateUnit;
}

UnderlyingProvisionOptionExerciseEarliestDateUnit.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseEarliestDateUnit.Tag = '42117';

UnderlyingProvisionOptionExerciseEarliestDateUnit.Type = 'STRING';

module.exports = UnderlyingProvisionOptionExerciseEarliestDateUnit;