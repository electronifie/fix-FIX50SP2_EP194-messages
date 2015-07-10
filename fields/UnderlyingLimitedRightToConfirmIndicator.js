var invert = require('invert-obj');

function UnderlyingLimitedRightToConfirmIndicator (underlyingLimitedRightToConfirmIndicator) {
  this.message = underlyingLimitedRightToConfirmIndicator;
}

UnderlyingLimitedRightToConfirmIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingLimitedRightToConfirmIndicator.Tag = '41818';

UnderlyingLimitedRightToConfirmIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingLimitedRightToConfirmIndicator;