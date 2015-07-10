var invert = require('invert-obj');

function LegProvisionOptionExercisePeriodSkip (legProvisionOptionExercisePeriodSkip) {
  this.message = legProvisionOptionExercisePeriodSkip;
}

LegProvisionOptionExercisePeriodSkip.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExercisePeriodSkip.Tag = '40488';

LegProvisionOptionExercisePeriodSkip.Type = 'INT';

module.exports = LegProvisionOptionExercisePeriodSkip;