var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseMultipleNotional (underlyingProvisionOptionExerciseMultipleNotional) {
  this.message = underlyingProvisionOptionExerciseMultipleNotional;
}

UnderlyingProvisionOptionExerciseMultipleNotional.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseMultipleNotional.Tag = '42160';

UnderlyingProvisionOptionExerciseMultipleNotional.Type = 'AMT';

module.exports = UnderlyingProvisionOptionExerciseMultipleNotional;