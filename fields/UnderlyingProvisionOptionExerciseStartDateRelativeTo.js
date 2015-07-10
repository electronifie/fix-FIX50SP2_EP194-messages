var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseStartDateRelativeTo (underlyingProvisionOptionExerciseStartDateRelativeTo) {
  this.message = underlyingProvisionOptionExerciseStartDateRelativeTo;
}

UnderlyingProvisionOptionExerciseStartDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseStartDateRelativeTo.Tag = '42121';

UnderlyingProvisionOptionExerciseStartDateRelativeTo.Type = 'INT';

module.exports = UnderlyingProvisionOptionExerciseStartDateRelativeTo;