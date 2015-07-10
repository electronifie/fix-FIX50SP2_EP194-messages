var invert = require('invert-obj');

function ProvisionOptionExerciseMultipleNotional (provisionOptionExerciseMultipleNotional) {
  this.message = provisionOptionExerciseMultipleNotional;
}

ProvisionOptionExerciseMultipleNotional.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseMultipleNotional.Tag = '40102';

ProvisionOptionExerciseMultipleNotional.Type = 'AMT';

module.exports = ProvisionOptionExerciseMultipleNotional;