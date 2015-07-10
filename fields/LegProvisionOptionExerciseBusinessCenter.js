var invert = require('invert-obj');

function LegProvisionOptionExerciseBusinessCenter (legProvisionOptionExerciseBusinessCenter) {
  this.message = legProvisionOptionExerciseBusinessCenter;
}

LegProvisionOptionExerciseBusinessCenter.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExerciseBusinessCenter.Tag = '40477';

LegProvisionOptionExerciseBusinessCenter.Type = 'STRING';

module.exports = LegProvisionOptionExerciseBusinessCenter;