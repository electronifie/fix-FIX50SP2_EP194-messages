var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseBusinessDayConvention (underlyingProvisionOptionExerciseBusinessDayConvention) {
  this.message = underlyingProvisionOptionExerciseBusinessDayConvention;
}

UnderlyingProvisionOptionExerciseBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseBusinessDayConvention.Tag = '42115';

UnderlyingProvisionOptionExerciseBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingProvisionOptionExerciseBusinessDayConvention;