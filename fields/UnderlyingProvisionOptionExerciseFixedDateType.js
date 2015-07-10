var invert = require('invert-obj');

function UnderlyingProvisionOptionExerciseFixedDateType (underlyingProvisionOptionExerciseFixedDateType) {
  this.message = underlyingProvisionOptionExerciseFixedDateType;
}

UnderlyingProvisionOptionExerciseFixedDateType.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExerciseFixedDateType.Tag = '42114';

UnderlyingProvisionOptionExerciseFixedDateType.Type = 'INT';

module.exports = UnderlyingProvisionOptionExerciseFixedDateType;