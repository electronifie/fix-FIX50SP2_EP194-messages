var invert = require('invert-obj');

function LegFlexProductEligibilityIndicator (legFlexProductEligibilityIndicator) {
  this.message = legFlexProductEligibilityIndicator;
}

LegFlexProductEligibilityIndicator.prototype.value = function () {
  return this.message;
};

LegFlexProductEligibilityIndicator.Tag = '2203';

LegFlexProductEligibilityIndicator.Type = 'BOOLEAN';

module.exports = LegFlexProductEligibilityIndicator;