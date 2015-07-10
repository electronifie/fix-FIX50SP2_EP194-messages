var invert = require('invert-obj');

function UnderlyingProvisionOptionExercisePeriodSkip (underlyingProvisionOptionExercisePeriodSkip) {
  this.message = underlyingProvisionOptionExercisePeriodSkip;
}

UnderlyingProvisionOptionExercisePeriodSkip.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExercisePeriodSkip.Tag = '42126';

UnderlyingProvisionOptionExercisePeriodSkip.Type = 'INT';

module.exports = UnderlyingProvisionOptionExercisePeriodSkip;