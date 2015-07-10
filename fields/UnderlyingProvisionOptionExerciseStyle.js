var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseStyle (underlyingProvisionOptionExerciseStyle) {
  this.message = underlyingProvisionOptionExerciseStyle;
}

UnderlyingProvisionOptionExerciseStyle.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseStyle.Tag = '42159';

UnderlyingProvisionOptionExerciseStyle.Type = 'INT';

module.exports = UnderlyingProvisionOptionExerciseStyle;