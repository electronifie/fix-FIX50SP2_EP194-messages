var invert = require('invert-obj');

function ProvisionOptionExerciseBusinessDayConvention (provisionOptionExerciseBusinessDayConvention) {
  this.message = provisionOptionExerciseBusinessDayConvention;
}

ProvisionOptionExerciseBusinessDayConvention.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseBusinessDayConvention.Tag = '40123';

ProvisionOptionExerciseBusinessDayConvention.Type = 'INT';

module.exports = ProvisionOptionExerciseBusinessDayConvention;