var invert = require('invert-obj');

function ProvisionOptionExerciseFixedDateType (provisionOptionExerciseFixedDateType) {
  this.message = provisionOptionExerciseFixedDateType;
}

ProvisionOptionExerciseFixedDateType.prototype.value = function () {
  return this.message;
};


ProvisionOptionExerciseFixedDateType.Keys = {
  'UNADJUSTED': '0',
  'ADJUSTED': '1',
};

ProvisionOptionExerciseFixedDateType.Tag = '40144';

ProvisionOptionExerciseFixedDateType.Type = 'INT';

ProvisionOptionExerciseFixedDateType.Values = invert(ProvisionOptionExerciseFixedDateType.Keys);

module.exports = ProvisionOptionExerciseFixedDateType;