var invert = require('invert-obj');

function UnderlyingFlexProductEligibilityIndicator (underlyingFlexProductEligibilityIndicator) {
  this.message = underlyingFlexProductEligibilityIndicator;
}

UnderlyingFlexProductEligibilityIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingFlexProductEligibilityIndicator.Tag = '2036';

UnderlyingFlexProductEligibilityIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingFlexProductEligibilityIndicator;