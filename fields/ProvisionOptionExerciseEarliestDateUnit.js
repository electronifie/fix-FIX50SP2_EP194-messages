var invert = require('invert-obj');

function ProvisionOptionExerciseEarliestDateUnit (provisionOptionExerciseEarliestDateUnit) {
  this.message = provisionOptionExerciseEarliestDateUnit;
}

ProvisionOptionExerciseEarliestDateUnit.prototype.value = function () {
  return this.message;
};


ProvisionOptionExerciseEarliestDateUnit.Keys = {
  'DAY': 'D',
  'WEEK': 'Wk',
  'MONTH': 'Mo',
  'YEAR': 'Yr',
};

ProvisionOptionExerciseEarliestDateUnit.Tag = '40126';

ProvisionOptionExerciseEarliestDateUnit.Type = 'STRING';

ProvisionOptionExerciseEarliestDateUnit.Values = invert(ProvisionOptionExerciseEarliestDateUnit.Keys);

module.exports = ProvisionOptionExerciseEarliestDateUnit;