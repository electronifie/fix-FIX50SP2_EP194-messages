var invert = require('invert-obj');

function LegProvisionOptionExerciseBusinessDayConvention (legProvisionOptionExerciseBusinessDayConvention) {
  this.message = legProvisionOptionExerciseBusinessDayConvention;
}

LegProvisionOptionExerciseBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseBusinessDayConvention.Tag = '40476';

LegProvisionOptionExerciseBusinessDayConvention.Type = 'INT';

module.exports = LegProvisionOptionExerciseBusinessDayConvention;