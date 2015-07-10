var invert = require('invert-obj');

function ProvisionOptionExerciseStyle (provisionOptionExerciseStyle) {
  this.message = provisionOptionExerciseStyle;
}

ProvisionOptionExerciseStyle.prototype.value = function () {
  return this.message;
};

ProvisionOptionExerciseStyle.Tag = '40101';

ProvisionOptionExerciseStyle.Type = 'INT';

module.exports = ProvisionOptionExerciseStyle;