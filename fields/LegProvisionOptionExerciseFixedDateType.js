var invert = require('invert-obj');

function LegProvisionOptionExerciseFixedDateType (legProvisionOptionExerciseFixedDateType) {
  this.message = legProvisionOptionExerciseFixedDateType;
}

LegProvisionOptionExerciseFixedDateType.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseFixedDateType.Tag = '40497';

LegProvisionOptionExerciseFixedDateType.Type = 'INT';

module.exports = LegProvisionOptionExerciseFixedDateType;