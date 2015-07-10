var invert = require('invert-obj');

function LegProvisionOptionExerciseStyle (legProvisionOptionExerciseStyle) {
  this.message = legProvisionOptionExerciseStyle;
}

LegProvisionOptionExerciseStyle.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseStyle.Tag = '40459';

LegProvisionOptionExerciseStyle.Type = 'INT';

module.exports = LegProvisionOptionExerciseStyle;